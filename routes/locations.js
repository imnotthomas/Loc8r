var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/locations.js');

/* GET Home page */
router.get('/', ctrl.home);

router.get('/test', function(req, res, next) {
    res.render('location-list', { title : 'location' });
});

/* GET Location  */
router.get('/location', ctrl.locationInfo);

/* GET Location Review */
router.get('/location/review/new', ctrl.addReview);

module.exports = router;
