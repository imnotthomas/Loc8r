
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
    res.render('location-info', {
        title : 'Location',
        location : {
            name: "Starcups",
            rating: 3,
            address: "125 High Street, Reading, RG6 1PS",
            hours: [{
                day: "Monday - Friday",
                open: "7:00am",
                close: "7:00pm",
                closed: false
            },{
                day: "Saturday",
                open: "8:00am",
                close: "5:00pm",
                closed:false
            },{
                day: "Sunday",
                closed: true
            }],
            facilities : [
                "Hot drinks",
                "Food",
                "Premium wifi"
            ],
            review : [{
                rating : 5,
                customer : "Thomas Altman",
                date : "22 February 2015",
                text : "What a great place. I can't say enough good things about it."
            },{
                rating : 3,
                customer : "Charlie Chaplin",
                date : "16 June 2014",
                text : "It was okay. Coffee wasn't great, but the wifi was fast."
            }]
        }
    });
};

/* Render New Review page */
module.exports.addReview = function(req, res, next) {
    res.render('location-review-form', { title: "New Review" });
};
