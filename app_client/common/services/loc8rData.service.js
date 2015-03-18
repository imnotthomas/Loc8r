angular
    .module('loc8rApp')
    .service('loc8rData', loc8rData);

function loc8rData ($http) {
    var getloc8rData = function() {
        return $http.get('/api/locations');
    };
    return {
        getloc8rData : getloc8rData
    };
}
