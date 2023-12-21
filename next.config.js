/** @type {import('next').NextConfig} */
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const nextConfig = {};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
