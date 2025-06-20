/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "byrxymscddlzxbqwdyqe.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
        search: "",
      },
    ],
    unoptimized: true, // 👈 disables built-in image optimization
  },
  output: "export",
};

export default nextConfig;
