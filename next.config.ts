import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  reactStrictMode: true,
  // Keep production builds from clearing the running dev server's files.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  outputFileTracingRoot: __dirname,
});
export default nextConfig;
