/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ['localhost'],
  },
  rules: {
    "@next/next/no-img-element": "off",
   },
};

export default nextConfig;
