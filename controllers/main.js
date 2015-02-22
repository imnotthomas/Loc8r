/* Render About Page */
module.exports.about = function(req, res, next) {
    res.render('generic-text', {
        title : 'About Loc8r',
        content : 'Deep v synth DIY, food truck normcore four dollar toast 3 wolf moon Truffaut next level tote bag YOLO pug selvage ugh kitsch. Stumptown kogi yr, biodiesel photo booth slow-carb ugh. Lo-fi brunch photo booth biodiesel four loko fap before they sold out polaroid, bitters banh mi mixtape leggings Pitchfork readymade. Church-key locavore raw denim readymade leggings Thundercats. PBR letterpress put a bird on it Carles. Art party Helvetica selfies shabby chic, pork belly biodiesel occupy Marfa High Life dreamcatcher post-ironic. Ugh Kickstarter artisan banh mi, yr Godard polaroid fingerstache actually cardigan pug bitters.' 
    });
};

/* Render Signin Page*/
module.exports.signin = function(req, res, next) {
    res.render('index', { title : 'signin' });
};
