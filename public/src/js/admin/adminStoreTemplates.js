(function(module) {
try {
  module = angular.module('AdminStoreTemplates');
} catch (e) {
  module = angular.module('AdminStoreTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/admin/main.html',
    '<h1>Admin panel</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('AdminStoreTemplates');
} catch (e) {
  module = angular.module('AdminStoreTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/admin/products/main.html',
    '<div layout="row"><div><h2>Productos</h2></div><md-button aria-label="Nuevo producto" class="md-fab md-raised md-mini" ng-click="newProduct()"><md-icon>add</md-icon><md-tooltip md-direction="right">Agregar un nuevo producto</md-tooltip></md-button></div><div layout="row" layout-align="end end"><md-fab-speed-dial md-open="false" md-direction="up" class="md-fling"><md-fab-trigger><md-button aria-label="menu" class="md-fab md-warn"><md-icon>menu</md-icon></md-button></md-fab-trigger><md-fab-actions><md-button aria-label="Nuevo producto" class="md-fab md-raised md-mini" ng-click="newProduct()"><md-icon>add</md-icon><md-tooltip md-direction="left">Agregar un nuevo producto</md-tooltip></md-button></md-fab-actions></md-fab-speed-dial></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('AdminStoreTemplates');
} catch (e) {
  module = angular.module('AdminStoreTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/admin/products/newProduct.html',
    '<md-dialog aria-label="Agregar un producto"><form ng-cloak=""><md-toolbar><div class="md-toolbar-tools"><h2>Agregar un producto: {{product.name}}</h2><span flex=""></span><md-button class="md-icon-button" ng-click="cancel()"><md-icon aria-label="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><form accept-charset="utf-8" name="productForm"><div layout="row" layout-xs="column"><md-input-container><label>Nombre</label> <input type="text" ng-model="product.name"></md-input-container><md-input-container><label>Precio</label> <input type="text" ng-model="product.price"></md-input-container><md-input-container><label>Categoria</label><md-select ng-model="product.category"><md-option><em>None</em></md-option><md-option ng-repeat="cat in [\'Playeras\', \'Leggins\', \'Pantalones\']">{{cat}}</md-option></md-select></md-input-container></div><md-input-container><label>Descripcion</label> <textarea ng-model="product.description"></textarea></md-input-container></form></div></md-dialog-content><md-dialog-actions layout="row"><md-button>Save</md-button><md-button ng-click="cancel()">Cancel</md-button></md-dialog-actions></form></md-dialog>');
}]);
})();
