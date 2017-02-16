//Directivas

(function () {

  angular.module('porfolio.directives', [])

  //Data Item HTML
  .directive('itemData', function(){
    return{
      restrict: 'E', // Elemento html
      templateUrl: 'partials/item-data.html', //template html
    };
  })

  //Tabs HTML
  .directive('itemTabs', function(){
    return{
      restrict: 'E', // Elemento html
      templateUrl: 'partials/item-tabs.html', //template html
    };
  });

})();
