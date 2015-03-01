var express = require('express');
var router  = express.Router();
var ctrl    = require('../controllers/locations');

// locations

router.get('/locations', ctrl.locationsList);
router.post('/locations', ctrl.locationsCreate);
router.get('/locations/:locationid', ctrl.locationsReadOne);

module.exports = router;
