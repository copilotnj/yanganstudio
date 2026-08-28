import { cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawn } from 'node:child_process';

const mode = process.argv[2];
if (mode !== 'dev' && mode !== 'build') {
  console.error('Usage: node scripts/pages-runner.mjs <dev|build>');
  process.exit(1);
}

const source = resolve('source-images');
const publicMedia = resolve('public/media');
const nextBin = resolve('node_modules/next/dist/bin/next');

function clean() {
  if (existsSync(publicMedia)) rmSync(publicMedia, { recursive: true, force: true });
}

clean();
cpSync(source, publicMedia, { recursive: true });

const child = spawn(process.execPath, [nextBin, mode], {
  stdio: 'inherit',
  env: { ...process.env, DEPLOY_TARGET: 'github-pages' },
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}

child.on('exit', (code) => {
  clean();
  process.exit(code ?? 1);
});

child.on('error', (error) => {
  clean();
  console.error(error);
  process.exit(1);
});
