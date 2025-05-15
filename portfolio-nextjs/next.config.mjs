/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
    ],
    // unoptimized: true, // This line is no longer needed
  },
  // Enable static exports for flexibility if needed
  // output: 'export', // Removed this line
  // The appDir option is no longer needed in Next.js 13+ as App Router is the default
};

export default nextConfig;
