import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // /today uploads downscaled images and TM.30 PDFs to server actions;
      // the default 1MB would reject them. 4.5MB matches Vercel's ceiling.
      bodySizeLimit: "4.5mb",
    },
  },
};

export default nextConfig;
