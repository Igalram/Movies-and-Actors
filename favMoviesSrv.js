app.factory('favMoviesSrv', function($http, $log, $q, convertService) {

    var test= "do you see favMovieservice service???";
    console.log(test);
    
    var API_KEY = "ddce1bf04c2fe2731b0ba5290fd7c795";
    console.log(API_KEY);
   

//show current favs in movies arr

    var movies = [];

    //constructor
  function Movie(name, length, snippet, imdb, poster, id) {
    this.name = name;
    this.length = length;
    this.snippet = snippet;
    this.imdb = imdb;
    this.poster = poster;
    this.id = id;

  }


    
  getMovie = function (result) {
    var id = "";
    console.log(result.id);
    var tempMovieObj;
    id = result.id;
    var getMovieUrl = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" +
      $scope.API_KEY + "&language=en-US";

    $http.get(getMovieUrl).then(function (response) {
      tempMovieObj = response.data.title;
      var movie = new Movie(response.data.title,
        response.data.runtime,
        response.data.overview,
        response.data.homepage,
        "https://image.tmdb.org/t/p/w200" + response.data.poster_path,
        response.data.id);

      movies.push(movie);

    },
      function (error) {
        console.error(error);
      })
    $scope.tempResults = [];
    $scope.query = "";

  }


//get movie
  
       
    return {
         API_KEY :  API_KEY

          }

});