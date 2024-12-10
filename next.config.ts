import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.externals['fs'] = 'empty';
      config.resolve.fallback = { fs: false, };
    }

    return config;
  },
};

export default nextConfig;
