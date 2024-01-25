/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: 'AIzaSyBlLMJ7Scgd7DVgx8_OcaXb0kgO0u4sT8Q',
  },
};

module.exports = nextConfig;
