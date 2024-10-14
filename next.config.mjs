import removeImports from 'next-remove-imports'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default removeImports(nextConfig)
