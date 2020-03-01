const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

const catBreedRouter = require('./routes/catBreedRoutes');

const app = express();

// Set config file path
dotenv.config({ path: './config.env' });

//Implement cors
app.use(cors());
app.options('*', cors());

// Set security HTTP headers
app.use(helmet());

// Development login
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/catBreeds', catBreedRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server :(`
  });
});

module.exports = app;
