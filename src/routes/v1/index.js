const express = require('express');
const proxy = require('express-http-proxy');

const router = express.Router();
router.use('/user', proxy(process.env.USER_SERVICE));
router.use('/motel', proxy(process.env.MOTEL_SERVICE));

module.exports = router;
