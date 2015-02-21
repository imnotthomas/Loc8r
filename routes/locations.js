var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/locations.js');

/* GET Home page */
router.get('/', ctrl.home);

/* GET Location  */
router.get('/location', function(req, res, next) {
    res.render('index', { title : 'Location'});
});

/* GET Location Review */
router.get('/location/review/new', function(req, res, next) {
    res.render('index', { title: "New Review" });
});

module.exports = router;
