/** @type {import('next').NextConfig} */
const nextConfig = {};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/alvrian.github.io/' : '',
  basePath: isProd ? '/alvrian.github.io' : '',
  output: 'export',
};

export default nextConfig;
