/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '_next', 
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ['localhost','api.demo.smarttechco.vn/'],
  },
  rules: {
    "@next/next/no-img-element": "off",
   },
   eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
