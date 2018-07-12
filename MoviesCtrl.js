app.controller('moviesCtrl', function ($scope, $http, convertService, favMoviesSrv) {

  $scope.movies = [];


  //constructor
  function Movie(name, length, snippet, imdb, poster, id) {
    this.name = name;
    this.length = length;
    this.snippet = snippet;
    this.imdb = imdb;
    this.poster = poster;
    this.id = id;

  }



  $scope.query = "";
  $tempResults = [];
  $scope.wordRate = convertService.wordRate;
  $scope.API_KEY = favMoviesSrv.API_KEY;


  $scope.getResults = function (query) {
    if ($scope.query) {
      var searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" +
        $scope.API_KEY + "&language=en-US&query=" + encodeURIComponent($scope.query) +
        "&page=1&include_adult=false";

      $http.get(searchUrl).then(function (response) {
        $scope.tempResults = response.data.results;
        console.log($scope.tempResults);
        $scope.poster = "https://image.tmdb.org/t/p/w200" + $scope.tempResults.poster_path;

      },
        function (error) {
          console.error(error);
        })
    } else {
      $scope.tempResults = [];
    }
  }




});

