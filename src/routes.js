const log = require('loglevel');
const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
  log.info('GET /');

  return res.json({
    error: false,
  });
});

module.exports = router;
