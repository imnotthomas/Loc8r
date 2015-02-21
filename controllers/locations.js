
/* Render Home page */
module.exports.home = function(req, res, next) {
    res.render('index', { title : "Home" });
};

/* Render Location page  */
module.exports.locationInfo = function(req, res, next) {
    res.render('index', { title : 'Location'});
};

/* Render New Review page */
module.exports.addReview = function(req, res, next) {
    res.render('index', { title: "New Review" });
};
