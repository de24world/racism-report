/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  // for cloudflare build
  images: {
    loader: 'imgix',
    path: 'https://noop/',
  },
};

module.exports = nextConfig;
