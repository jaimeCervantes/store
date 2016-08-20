(function(ng){

ng.module('Store', ['ngMaterial'])

.config(['$controllerProvider', function($controllerProvider){
	$controllerProvider.register('mainCtrl', ['$scope', '$http', '$mdSidenav', function($scope, $http, $mdSidenav){
		$scope.products = [];
		$scope.loading = {
			products: true
		};
		
		$scope.errors = {
			products: false
		};

		$scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

		$http.get('/products')
					.then(function(response){
						$scope.products = response.data;
						$scope.loading.products = false;
					})
					.catch(function(error){
						console.log(error);
						$scope.errors.products = true;
					});
	}]);
}])

.config(['$mdThemingProvider', '$mdIconProvider', function($mdThemingProvider, $mdIconProvider){
	$mdThemingProvider.theme('default')
		.primaryPalette('pink')
		.accentPalette('blue');
}]);

})(angular);