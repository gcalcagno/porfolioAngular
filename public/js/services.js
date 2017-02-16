(function () {

  angular.module('porfolio.services', [])

    .factory('porfolioService', ['$http', '$q', '$filter', function ($http, $q, $filter) {
      var normalize = $filter('normalize');

      function all() {
        var deferred = $q.defer();

        $http.get('/items.json')
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }


      function byName(name) {
        name = normalize(name);
        var deferred = $q.defer();

        all().then(function (data) {
          var results = data.filter(function (item) {
            return normalize(item.name) === name;
          });

          if (results.length > 0) {
            deferred.resolve(results[0]);
          } else {
            deferred.reject();
          }

        });

        return deferred.promise;
      }

      return {
        all: all,
        byName: byName
      };

    }]);

})();
