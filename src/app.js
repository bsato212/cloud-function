const log = require('loglevel');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const settings = require('./settings');
const routes = require('./routes');

log.setLevel(settings.logLevel);

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

app.use('/', routes);

module.exports = {
  app,
};
