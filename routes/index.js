var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/main');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title : "Express" });
});

/*
router.get('/about', ctrl.about);
*/

module.exports = router;
