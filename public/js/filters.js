//Filtros

(function () {

  angular.module('porfolio.filters', [])

  	.filter('normalize', function () {
      return function (input) {
          input = input
                  .replace('♀', 'f')
                  .replace('♂', 'm')
                  .replace(/\W+/g, "");
          return input.toLowerCase();
      };
    })

    //Imagen Porfolio
    .filter('imageify', function () {
      return function (input) {
        var url = "img/porfolio/" + input.toLowerCase();
        return url;
      };
    });

})();

