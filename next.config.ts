import type { NextConfig } from 'next';

const pagesBuild = process.env.DEPLOY_TARGET !== 'r2';
const basePath = pagesBuild ? (process.env.PAGES_BASE_PATH ?? '') : '';

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  trailingSlash: true,
  ...(pagesBuild
    ? {
        output: 'export',
        images: { unoptimized: true },
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
