/** @type {import('next').NextConfig} */
// https://res.cloudinary.com/dkoxjcwg7/image/upload/v1674188548/projects/amazon-website_2019_homepage-august_dyjzpv.jpg
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.g2crowd.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig
