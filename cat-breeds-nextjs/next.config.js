const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const config = {
  env: {
    DB_URL: 'http://localhost:3000/api/v1/catBreeds'
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });

    return config;
  }
};

module.exports = withOffline(withSass(config));
