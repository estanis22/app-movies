const movies = require ("./movies.js");


const moviesDH = {
    listMovies: function(movies) {
      return movies.map(movie => {
        return movie.title;
      });
    },
    searchMovie: function (query) {
        let foundMovie = null;
        movies.forEach(function (movie) {
          if (movie.id === query || movie.title === query) {
            foundMovie = movie;
          }
        });
        return foundMovie;
      },
};

// listMovies test
console.log(moviesDH.listMovies(movies));
// searchMovies test
console.log(moviesDH.searchMovie(10));
console.log(moviesDH.searchMovie("Titanic"));