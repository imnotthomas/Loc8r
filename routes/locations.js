var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/locations.js');

/* GET Home page */
router.get('/', ctrl.home);

module.exports = router;
