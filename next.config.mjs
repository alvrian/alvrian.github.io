/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    output: 'export',
  };