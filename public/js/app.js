(function () {

  var app = angular.module('porfolio', [
    'ngRoute',
    'porfolio.controllers',
    'porfolio.directives',
    'porfolio.filters',
    'porfolio.services'
  ]);


  //rutas
  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/lista.html',
        controller: 'ListaController'
      })
      .when('/porfolio/:name', {
        templateUrl: 'views/item.html',
        controller: 'ItemController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();
