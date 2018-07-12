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
  /*
  //hardcorded movie
    var movie = new Movie("The Rocky Horror Picture Show", 100, "chunky productions", "https://www.themoviedb.org/movie/36685-the-rocky-horror-picture-show?language=en-US", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v2NC7o8f7AZvQbOAwrfRbe5Z106.jpg");
    $scope.movies.push(movie);
    var movie = new Movie("The Rocky Horror Picture Show", 100, "chunky productions", "https://www.themoviedb.org/movie/36685-the-rocky-horror-picture-show?language=en-US", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v2NC7o8f7AZvQbOAwrfRbe5Z106.jpg");
    $scope.movies.push(movie);
    var movie = new Movie("The Rocky Horror Picture Show", 100, "chunky productions", "https://www.themoviedb.org/movie/36685-the-rocky-horror-picture-show?language=en-US", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v2NC7o8f7AZvQbOAwrfRbe5Z106.jpg");
    $scope.movies.push(movie);
    console.log($scope.movies);
*/
  /*
    $http.get('actors.JSON').then(function(response) {
      response.data.forEach(function(plainObj) {
        var actor = new Actor (plainObj.name, plainObj.age, plainObj.imgURL, plainObj.url);
        $scope.actors.push(actor);
      })
  
  }, function(error) {
      console.error(error);
    });
  */

  
  $scope.query = "";
  $tempResults = [];
  $scope.wordRate = convertService.wordRate;
  $scope.API_KEY = favMoviesSrv.API_KEY;

  /*
      $scope.criteriaMatch = function (movie) {
  
          if (!$scope.query || movie.name.toLowerCase().includes($scope.query.toLowerCase())) { return true; }
          else { return false; }
  
      };
  
      $scope.sorts = [{label: 'Alphabetically', name: 'name'},{label: 'Birthday', name: 'age'}];
  
  
      $scope.movieSelected = null;
      $scope.setSelected = function (movieSelected) {
          $scope.movieSelected = movieSelected;
       };  */

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

  $scope.getMovie = function (result) {
    var id="";
    console.log(result.id);
    var tempMovieObj;
    id=result.id;
    var getMovieUrl = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" +
    $scope.API_KEY + "&language=en-US";

    $http.get(getMovieUrl).then(function (response) {
    tempMovieObj = response.data.title;
    var movie = new Movie(response.data.title, 
                          response.data.runtime, 
                          response.data.overview,
                          response.data.homepage,
                          "https://image.tmdb.org/t/p/w200"+response.data.poster_path,
                          response.data.id); 
                          
    $scope.movies.push(movie);

  }, 
  function (error) {
  console.error(error);
  })
  $scope.tempResults = [];
  $scope.query="";
  
}




});

