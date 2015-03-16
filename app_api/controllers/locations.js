var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsList = function(req, res) {
    console.log(req.body);
    Loc
        .find({})
        .exec(function(err, docs) {
        if(err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            console.log(docs);
            sendJSONresponse(res, 200, docs);
        }
    });
};

module.exports.locationsCreate = function(req, res) {
  console.log(req.body);
  Loc.create({
    name: req.body.name,
    address: req.body.address,
    facilities: req.body.facilities.split(","),
    coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
    openingTimes: [{
      days: req.body.days1,
      opening: req.body.opening1,
      closing: req.body.closing1,
      closed: req.body.closed1,
    }, {
      days: req.body.days2,
      opening: req.body.opening2,
      closing: req.body.closing2,
      closed: req.body.closed2,
    }]
  }, function(err, location) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      console.log(location);
      sendJSONresponse(res, 201, location);
    }
  });
};

module.exports.locationsReadOne = function(req, res) {
    Loc
        .findById(req.params.locationid)
        .exec(function(err, location) {
            sendJSONresponse(res, 200, location); 
        });
};
