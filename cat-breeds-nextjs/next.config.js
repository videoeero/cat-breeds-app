const withSass = require('@zeit/next-sass');

const withPWA = require('next-pwa');

module.exports = withPWA(
  withSass({
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
  })
);
