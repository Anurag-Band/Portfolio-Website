/** @type {import('next').NextConfig} */
// https://res.cloudinary.com/dkoxjcwg7/image/upload/v1674188548/projects/amazon-website_2019_homepage-august_dyjzpv.jpg
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
