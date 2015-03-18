angular
    .module('loc8rApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl (loc8rData) {
    var vm = this;
    vm.pageHeader = {
        title: 'Loc8r',
        strapline: 'Find places to work with wifi near you!'
    };
    vm.sidebar = {
        content: 'Looking for wifi and a seat etc'
    };
    vm.message = 'Checking';

    loc8rData.getloc8rData()
        .success(function(data) {
            vm.message = '';
            vm.data = { locations : data};
        });
}

