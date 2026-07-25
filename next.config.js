module.exports = {
  // Use remotePatterns instead of the deprecated domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cf-assets.www.cloudflare.com",
      },
      {
        protocol: "https",
        hostname: "sundeep-blogs.vercel.app"
      },
      {
        protocol: "https",
        hostname: "lh4.googleusercontent.com"
      }
    ],
  },

  // Support for Turbopack (Next.js 16 default)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Fallback for Webpack (legacy or specific build scenarios)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  experimental: {
    // Disable if hot reloads are inconsistent
    turbopackFileSystemCacheForDev: false,
  },
};
