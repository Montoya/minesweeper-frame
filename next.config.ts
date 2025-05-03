import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://minesweeper.miniapps.club/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
