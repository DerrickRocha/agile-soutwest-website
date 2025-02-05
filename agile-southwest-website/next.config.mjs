/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'], // Enable modern image formats for better performance
        domains: [], // Add external domains here if using a CDN (optional)
    },
};
export default nextConfig;
