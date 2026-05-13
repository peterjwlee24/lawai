import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires explicit allow-listing of any image quality value that's
    // not the default 75. The founder portrait is rendered at quality 88 for
    // a crisper face crop on /seminars.
    qualities: [75, 88],
  },
};

export default nextConfig;
