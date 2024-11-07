/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // Supported formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Standard device sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Image sizes for display densities
    loader: "default", // Default loader used for images
  },
};

export default nextConfig;
