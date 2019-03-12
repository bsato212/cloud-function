const log = require('./logger');
const settings = require('./settings');
const { app } = require('./app');

app.listen(settings.port, () => log.info(`App listening on port [${settings.port}]`));
