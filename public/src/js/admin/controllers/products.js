module.exports = function productsCtrl($scope, $mdDialog ) {
	$scope.sectionName = "Productos";
	$scope.isOpen = false;
	$scope.newProduct = function(){
		$mdDialog.show({
			controller: 'newProductCtrl',
			templateUrl: '/templates/admin/products/newProduct.html',
			clickOutsideToClose: false, //default: false
			escapeToclose: false, //default: true,
			//scope: ///if it is not specified, it will create a new isolate scope
			fullscreen: false //this add .md-dialog-fullscreen on open
		});
	};
};

module.exports.$inject = ['$scope', '$mdDialog'];