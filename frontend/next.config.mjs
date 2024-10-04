/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BACKEND: process.env.BACKEND,
  },
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
