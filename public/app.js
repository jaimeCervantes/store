(function(ng){

ng.module('Store', ['ngMaterial'])

.config(['$controllerProvider', function($controllerProvider){
	$controllerProvider.register('mainCtrl', ['$scope', '$http', function($scope, $http){
		$scope.products = [];
		$scope.loading = {
			products: true
		};
		
		$scope.errors = {
			products: false
		};

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

}]);

})(angular);