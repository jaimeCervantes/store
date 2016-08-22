require('./dependencies.js');
require('./storeTemplates.js');

function mainCtrl($scope, $http, $mdSidenav, $timeout){
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
					$timeout(function(){
						$scope.loading.products = false;
					}, 500);
				})
				.catch(function(error){
					console.log(error);
					$scope.errors.products = true;
				});
}

mainCtrl.$inject = ['$scope', '$http', '$mdSidenav', '$timeout'];

//Main module
var store = angular.module('Store', ['ngMaterial', 'ngRoute', 'StoreTemplates']);

store.config(['$controllerProvider', function($controllerProvider){
	$controllerProvider.register('mainCtrl', mainCtrl);
}]);

store.config(
	['$mdThemingProvider','$mdIconProvider', '$routeProvider',
		function($mdThemingProvider, $mdIconProvider, $routeProvider){
			$mdThemingProvider.theme('default')
				.primaryPalette('pink')
				.accentPalette('blue');

			$routeProvider
				.when('/', {
					templateUrl: '/templates/all/products/product-list.html'
				});

		}]);