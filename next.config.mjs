import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This folder lives inside a larger workspace; pin the root so Next doesn't
  // infer a parent directory from sibling lockfiles.
  turbopack: { root: projectRoot },
};

export default nextConfig;
