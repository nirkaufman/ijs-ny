/** @type {import('next').NextConfig} */

// super important! dont be blind to cache...
const nextConfig = {
  logging: {
    fetches: {fullUrl: true},
  }
};

export default nextConfig;
