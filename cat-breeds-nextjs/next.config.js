const withSass = require('@zeit/next-sass');

const withPWA = require('next-pwa');

const config = {
  env: {
    DB_URL: 'http://localhost:3000/api/v1/catBreeds'
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
};

module.exports = withPWA(withSass(config));
