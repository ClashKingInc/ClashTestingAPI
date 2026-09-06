import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

// Runs in the consuming npm repository, using Node 24's TypeScript support.
const name = '@clashking/clash-contract';
const repository = 'ClashKingInc/ClashTestingAPI';
const response = await fetch(
  `https://api.github.com/repos/${repository}/releases/latest`,
  {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(process.env.GH_TOKEN
        ? { Authorization: `Bearer ${process.env.GH_TOKEN}` }
        : {}),
    },
  },
);
if (response.status === 404) {
  console.log('No stable contract release yet.');
} else {
  if (!response.ok)
    throw new Error(`Release lookup failed: ${response.status}`);
  const release = (await response.json()) as {
    tag_name: string;
    draft: boolean;
    prerelease: boolean;
    assets: { name: string; state: string; browser_download_url: string }[];
  };
  if (
    release.draft ||
    release.prerelease ||
    !/^v\d+\.\d+\.\d+$/.test(release.tag_name)
  ) {
    throw new Error('Expected a stable vX.Y.Z release');
  }
  const filename = `clashking-clash-contract-${release.tag_name.slice(1)}.tgz`;
  const url = `https://github.com/${repository}/releases/download/${release.tag_name}/${filename}`;
  const asset = release.assets.find(
    (asset) => asset.name === filename && asset.state === 'uploaded',
  );
  if (!asset) {
    console.log('Release archive is not ready yet; a later run will retry.');
  } else {
    if (asset.browser_download_url !== url)
      throw new Error('Unexpected contract archive URL');
    const files = execFileSync('git', ['ls-files', '-z'], {
      encoding: 'utf8',
    }).split('\0');
    let found = false;
    let changed = false;
    for (const file of files.filter((file) =>
      /(^|\/)package\.json$/.test(file),
    )) {
      const manifest = JSON.parse(readFileSync(file, 'utf8'));
      let dirty = false;
      for (const section of [
        'dependencies',
        'devDependencies',
        'optionalDependencies',
      ]) {
        if (!Object.hasOwn(manifest[section] ?? {}, name)) continue;
        found = true;
        if (manifest[section][name] === url) continue;
        manifest[section][name] = url;
        dirty = true;
      }
      if (dirty) {
        writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`);
        changed = true;
      }
    }
    if (!found) throw new Error('Consumer has no clash-contract dependency');
    if (changed) {
      execFileSync(
        'npm',
        [
          'install',
          '--package-lock-only',
          '--ignore-scripts',
          '--no-audit',
          '--no-fund',
        ],
        { stdio: 'inherit' },
      );
      if (process.env.GITHUB_OUTPUT)
        writeFileSync(process.env.GITHUB_OUTPUT, 'changed=true\n', {
          flag: 'a',
        });
      console.log(`Updated contract dependencies to ${release.tag_name}`);
    }
  }
}
