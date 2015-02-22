
/* Render Home page */
module.exports.home = function(req, res, next) {
    res.render('location-list', {
        title : "Home",
        pageHeader : {
            title : "Loc8r",
            strapline : "Find places to work with wifi near you!"
        },
        locations : [{
            name: "Starcups",
            address: "125 High Street, Reading, RG6 1PS",
            rating: 3,
            facilities: ["hot drinks", "food", "Premium wifi"],
            distance: "100m"
        },{
            name: "Cafe Hero",
            address: "125 High Street, Reading, RG6 1PS",
            rating: 4,
            facilities:["hot drinks", "food", "Premium wifi"],
            distance: "200m"
        },{
            name: "Burger Queen",
            address: "125 High Street, Reading, RG6 1PS",
            rating: 5,
            facilities:["food", "Premium wifi"],
            distance: "250m"
        }]
    });
};

/* Render Location page  */
module.exports.locationInfo = function(req, res, next) {
    res.render('location-info', { title : 'Location'});
};

/* Render New Review page */
module.exports.addReview = function(req, res, next) {
    res.render('location-review-form', { title: "New Review" });
};
