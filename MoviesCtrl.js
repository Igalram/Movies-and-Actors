app.controller('moviesCtrl', function ($scope, $http, convertService, favMoviesSrv) {


  $tempResults = [];
  $scope.wordRate = convertService.wordRate;



  // Brings search results to view
  $scope.tempResults = [];



  $scope.getResults = function () {
    if ($scope.query) {
      favMoviesSrv.getResults($scope.query).then(function (results) {
        $scope.tempResults = results;
      }, 
      function (error) { $log.error(error);
      })}
    
  else { $scope.tempResults.splice(0, $scope.tempResults.length); }

      }
    
  


  //shows details of fav movies in grid view

  $scope.movies = []

  $scope.getMovie = function (result) {
    
    favMoviesSrv.getMovie(result).then(function (results) {
      $scope.movies = favMoviesSrv.movies;
      $scope.tempResults.splice(0, $scope.tempResults.length);
    },
      function (error) {
        $log.error(error);
      })
  }



});

