var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/main');

/* GET Signin Page*/
router.get('/', ctrl.signin);

module.exports = router;
