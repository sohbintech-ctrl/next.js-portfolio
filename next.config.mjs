/** @type {import('next').NextConfig} */
const nextConfig = {
      experimental: {
    // Explicitly allow development access from other origins
    allowedDevOrigins: ["http://192.168.18.200:3000"], 
    // Add more origins if needed
  },
};

export default nextConfig;
