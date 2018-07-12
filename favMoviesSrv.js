app.factory('favMoviesSrv', function($http, $log, $q, convertService) {

    var test= "do you see favMovieservice service???";
    console.log(test);
    
    var API_KEY = "ddce1bf04c2fe2731b0ba5290fd7c795";
    console.log(API_KEY);

    var tempResults = [];
   

    getResults = function (query) {
        var async = $q.defer();
        if (query) {
          var searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" +
            API_KEY + "&language=en-US&query=" + encodeURIComponent(query) +
            "&page=1&include_adult=false";
    
          $http.get(searchUrl).then(function (response) {
            tempResults = response.data.results;
            console.log(tempResults);
            async.resolve(tempResults);
          //  poster = "https://image.tmdb.org/t/p/w200" + tempResults.poster_path;
            
          },
            function (error) {
              console.error(error);
              async.reject("failed to movies results");
            })
        } else {
          tempResults = [];
        }
        return async.promise;
      }


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
    tempResults = [];
    query = "";

  }


//get movie
  
       
    return {
         getResults : getResults,
         getMovie : getMovie, 
          }

});