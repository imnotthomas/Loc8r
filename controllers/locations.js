
/* Render Home page */
module.exports.home = function(req, res, next) {
    res.render('index', { title : "Home" });
};
