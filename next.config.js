module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "upload.wikimedia.org",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
