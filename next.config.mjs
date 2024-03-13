import { i18n } from 'next-i18next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
