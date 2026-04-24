const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * Medusa Cloud-related environment variables
 */
const S3_HOSTNAME = process.env.MEDUSA_CLOUD_S3_HOSTNAME
const S3_PATHNAME = process.env.MEDUSA_CLOUD_S3_PATHNAME

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol:'https',
        hostname:'cdn.sanity.io',
        port:''
    },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: 'https',
        hostname: 's3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**', // Matches all paths
      },
      // If your URL looks like bucket-name.s3.us-east-1.amazonaws.com
      {
        protocol: 'https',
        hostname: '**.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      ...(S3_HOSTNAME && S3_PATHNAME
        ? [
            {
              protocol: "https",
              hostname: S3_HOSTNAME,
              pathname: S3_PATHNAME,
            },
          ]
        : []),
    ],
   
  },
 
    cacheLife: {
      
      "force-cache": {
        stale: 3600,    // Time before background revalidation (1 hour)
        revalidate: 60,  // Minimum frequency to refresh on server (1 min)
        expire: 86400,   // Max time to keep stale data (1 day)
      },
      // "force-cache" is now a named profile here
      "default": {
        stale: 3600, // 1 hour
        revalidate: 10, // 24 hours
        expire: 604800, // 1 week
      }
    }
  
}

module.exports = nextConfig
