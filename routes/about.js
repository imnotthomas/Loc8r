var express = require('express');
var router  = express.Router();
var ctrl = require('../controllers/main');

/* GET About page. */
router.get('/', ctrl.about);

module.exports = router;
