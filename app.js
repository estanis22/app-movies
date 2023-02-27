const movies = require ("./movies.js");
const fs = require('fs');
const util = require('util');



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
    searchMovieByGenre: function(genre){
        const matchingMovies = movies.filter(movie => movie.genre === genre);
        if (matchingMovies.length === 0) {
          return null;
        } else {
          const movieTitles = matchingMovies.map(movie => movie.title);
          return movieTitles;
        }
    },
    totalPrice: function() {
        return movies.reduce((acc, cur) => {
            return acc + parseFloat(cur.price);
          }, 0);
    },
    changeMovieGenre: function (id, newGenre) {
        const movieToChange = this.searchMovie(id);
            if (movieToChange) {
                if (movieToChange.genre == newGenre){
                    return `La película con id ${id} ya tenia ese género.`;
                }else{
                    movieToChange.genre = newGenre;
                    // Actualizar el archivo movies.js
                    // 'const movies = ': se define una cadena de texto que contiene el inicio de una sentencia de declaración de una variable movies en JavaScript.
                    // util.inspect(movies, { depth: null, compact: false }): se utiliza la función util.inspect() para convertir el objeto movies en una cadena de texto. 
                    // La función inspect() es una herramienta de depuración que convierte cualquier objeto de JavaScript en una cadena de texto legible. 
                    // En este caso, se utiliza para convertir el objeto movies en una cadena de texto que se puede escribir en un archivo de texto.
                    // + ';\n\nmodule.exports = movies;': se concatena el final de la declaración de la variable movies con la sentencia module.exports = movies;. 
                    // La sentencia module.exports es una característica de Node.js que permite que un objeto o función de JavaScript se exporte de un módulo para que se pueda utilizar en otro archivo de JavaScript.
                    const fileContent = 'const movies = ' + util.inspect(movies, { depth: null, compact: false }) + ';\n\nmodule.exports = movies;';
                    fs.writeFileSync('./movies.js', fileContent);
                    console.log(movieToChange)
                    return `El género de la película con id ${id} se actualizó correctamente.`;
                }
            } else {
                return `No se encontró ninguna película con id ${id}.`;
            }
    }
}

/******************** listMovies test *******************************/
//console.log(moviesDH.listMovies(movies));
/******************** searchMovies test *******************************/
//console.log(moviesDH.searchMovie(10));
//console.log(moviesDH.searchMovie(22));
//console.log(moviesDH.searchMovie("Titanic"));
//console.log(moviesDH.searchMovie("Test null"));
/******************** searchMovieByGenre test *******************************/
//console.log(moviesDH.searchMovieByGenre("Action"));
//console.log(moviesDH.searchMovieByGenre("Drama"));
//console.log(moviesDH.searchMovieByGenre("Test null"));
/******************** totalPrice test *******************************/
//console.log(moviesDH.totalPrice().toFixed(2));
/******************** changeMovieGenre test *******************************/
//console.log(moviesDH.changeMovieGenre(11, "Drama")); // La pelicula ya tiene ese genero.
//console.log(moviesDH.changeMovieGenre(11, "Comedy")); // Ok.
//console.log(moviesDH.changeMovieGenre(80, "Drama")); // No existe la pelicula con ese id.