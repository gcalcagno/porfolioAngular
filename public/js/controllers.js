(function () {

  angular.module('porfolio.controllers', [])
    .controller('ListaController', ['$scope', 'porfolioService', function ($scope, porfolioService) {
      porfolioService.all().then(function (data) {
        $scope.items = data;
      });

    }])

    .controller('ItemController', ['$scope','$routeParams', 'porfolioService', function ($scope, $routeParams, porfolioService) {
      //parametro nombre
      var name = $routeParams.name;
      
      $scope.item = {};

      porfolioService.byName(name)
      .then(function (data) {
        $scope.item = data;
      })
    }])

    .controller('TabsController', function () {
      this.tab = 1;

      this.selectTab = function (tab) {
        this.tab = tab;
      };
    });

})();
