(function(module) {
try {
  module = angular.module('StoreTemplates');
} catch (e) {
  module = angular.module('StoreTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/all/products/product-list.html',
    '<div flex-xs="50" flex-gt-xs="33" flex-gt-sm="25" flex-gt-md="20" flex-gt-lg="15" ng-repeat="prod in products"><md-card><img ng-src="/src/{{prod.pictures[0].split(\'.\')[0] + \'-min.png\'}}" class="md-card-image" alt="{{prod.name}}" <md-card-title=""><md-card-header><span class="md-headline" ng-bind="prod.name"></span></md-card-header><md-card-content><p ng-bind="prod.description"></p></md-card-content><md-card-actions layout="row" layout-align="start center"><md-button class="md-icon-button md-accent" aria-label="Add to shopping cart" ng-click="null"><md-icon>add_shopping_cart</md-icon><md-tooltip>Agregar al carrito de compras</md-tooltip></md-button><md-button class="md-icon-button md-accent" aria-label="Details" ng-click="null"><md-icon>subject</md-icon><md-tooltip>Ver producto</md-tooltip></md-button><md-menu><md-button class="md-icon-button md-accent" aria-label="Share" ng-click="$mdOpenMenu($event)"><md-icon>share</md-icon><md-tooltip>Compartir</md-tooltip></md-button><md-menu-content><md-menu-item ng-repeat="sn in [\'Facebook\', \'E-mail\', \'Twitter\']"><md-button>{{sn}}</md-button></md-menu-item></md-menu-content></md-menu></md-card-actions></md-card></div>');
}]);
})();
