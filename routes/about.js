var express = require('express');
var router  = express.Router();
var ctrl = require('../controllers/about');

/* GET About page. */
router.get('/', ctrl.about);

module.exports = router;
