module.exports = function newProductCtrl($scope, $mdDialog) {
	$scope.product = {
		name: ""
	};

	$scope.cancel = function(){
		$mdDialog.cancel();
	};
};

module.exports.$inject = ['$scope', '$mdDialog'];