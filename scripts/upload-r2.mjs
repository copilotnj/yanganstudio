import { readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const bucketIndex = args.indexOf('--bucket');
const bucket = bucketIndex >= 0 ? args[bucketIndex + 1] : (process.env.R2_BUCKET ?? 'site-creator-r2');
const local = args.includes('--local');

if (!bucket) {
  console.error('Pass a non-empty --bucket <bucket-name>.');
  process.exit(1);
}

const sourceRoot = resolve('source-images');
const mimeTypes = {
  '.avif': 'image/avif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

function filesIn(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? filesIn(path) : [path];
  });
}

for (const file of filesIn(sourceRoot)) {
  const key = relative(sourceRoot, file).replaceAll('\\', '/');
  const contentType = mimeTypes[extname(file).toLowerCase()];
  if (!contentType) continue;

  const commandArgs = [
    'wrangler', 'r2', 'object', 'put', `${bucket}/${key}`,
    '--file', file,
    '--content-type', contentType,
    '--cache-control', 'public, max-age=86400, stale-while-revalidate=604800',
    local ? '--local' : '--remote',
    '-y',
  ];

  if (local) commandArgs.push('--persist-to', '.wrangler/state');

  const result = spawnSync('npx', commandArgs, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log(`Uploaded image set to ${bucket} (${local ? 'local' : 'remote'}).`);
