const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');

const withPWA = require('next-pwa');

module.exports = withSass({
  env: {
    DB_URL: 'https://cat-breed-backend.herokuapp.com/api/v1/catbreeds',
    DB_LOCAL: 'http://localhost:3000/api/v1/catBreeds'
  },
  pwa: {
    dest: 'public'
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
});
