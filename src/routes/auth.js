const express = require('express');
const router = express.Router();
const admin = require('../controller/admin');

router.post('/register', admin.register);
router.post('/login', admin.login);

module.exports = router;