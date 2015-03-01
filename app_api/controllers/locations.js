var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsList = function(req, res) {
    sendJSONresponse(res, 200, {'status' :'success'});
}; 

module.exports.locationsCreate = function(req, res) {
    sendJSONresponse(res, 200, {'status' :'success'});                        
};

module.exports.locationsReadOne = function(req, res) {
    sendJSONresponse(res, 200, {'status' :'success'}); 
};
