/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'portfolio-next.test',
      },
    ],
  },
};

module.exports = nextConfig;
