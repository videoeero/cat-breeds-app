const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const catBreedRouter = require('./routes/catBreedRoutes');

const app = express();

dotenv.config({ path: './config.env' });

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/catBreeds', catBreedRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server :(`
  });
});

module.exports = app;
