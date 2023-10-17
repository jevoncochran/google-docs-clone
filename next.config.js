/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "ssl.gstatic.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;