require('dotenv').config();

module.exports = {
  logLevel: process.env.LOGLEVEL || 'trace',
  port: 8080,
};
