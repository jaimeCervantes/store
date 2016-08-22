require('../dependencies.js');
require('./adminStoreTemplates.js');

var controllers = require('./controllers.js');

var adminStore = angular.module('AdminStore', ['ngMaterial', 'ngRoute', 'AdminStoreTemplates']);

adminStore.controller('adminCtrl', ['$scope', '$mdSidenav', '$timeout', function($scope, $mdSidenav, $timeout ){
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

  $timeout(function(){
		$scope.loading.products = false;
  }, 500);

}]);

angular.forEach(controllers, function( ctrl, name){
	adminStore.controller(name, ctrl);
});

adminStore.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/templates/admin/main.html'//,or './templates/main.html' 
		})
		.when('/products/', {
			templateUrl: '/templates/admin/products/main.html',
			controller: 'productsCtrl'
		})
		.when('/products/create', {
			templateUrl: '/templates/admin/products/create.html'
		});
}]);