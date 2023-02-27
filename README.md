<!-- Español -->
# app-movies
app-movies es una aplicación realizada durante el curso de Digital House de programación web full-stack. El objetivo de la aplicación es proporcionar algunas funcionalidades relacionadas con un conjunto de películas almacenadas en un archivo movies.js.

## Descripción
La aplicación consta de dos archivos: movies.js y app.js.

El archivo movies.js es un archivo JavaScript que contiene un array de películas.

El archivo app.js es un archivo JavaScript que utiliza el módulo movies.js y proporciona algunos métodos para manipular las películas.

## Métodos
A continuación, se describen los métodos disponibles en app.js:

### listMovies(movies): 
este método toma como argumento un array de películas y devuelve un array de títulos de películas.
#### searchMovie(query): 
este método toma como argumento un id o un título de película y devuelve la película correspondiente si se encuentra en el archivo movies.js.
### searchMovieByGenre(genre): 
este método toma como argumento un género de película y devuelve un array de títulos de películas que pertenecen a ese género. Si no se encuentra ninguna película con ese género, se devuelve null.
#### totalPrice(): 
este método devuelve el precio total de todas las películas almacenadas en el archivo movies.js.
### changeMovieGenre(id, newGenre): 
este método toma como argumentos el id de una película y el género al que se desea cambiar. Si la película se encuentra en el archivo movies.js, se actualiza su género y se guarda el cambio en el archivo. Si la película ya tenía el género deseado, se devuelve un mensaje informativo. Si no se encuentra ninguna película con el id proporcionado, se devuelve un mensaje de error.
## Cómo usar
Para ejecutar la aplicación, es necesario ejecutar el siguiente comando en una terminal:

node app.js
El archivo app.js contiene algunos console.log() al final del archivo que pueden ser utilizados para probar cada uno de los métodos disponibles en la aplicación.

Para probar los métodos, simplemente retire los comentarios que se encuentran delante de las líneas que corresponden a los métodos que desea probar.


<!-- English -->
# app-movies
app-movies is an application developed during the Digital House full-stack web programming course. The goal of the application is to provide some functionalities related to a set of movies stored in a movies.js file.

## Description
The application consists of two files: movies.js and app.js.

The movies.js file is a JavaScript file that contains an array of movies.

The app.js file is a JavaScript file that uses the movies.js module and provides some methods to manipulate the movies.

## Methods
The following are the available methods in app.js:

### listMovies(movies):
This method takes an array of movies as an argument and returns an array of movie titles.

### searchMovie(query):
This method takes a movie id or title as an argument and returns the corresponding movie if it is found in the movies.js file.

### searchMovieByGenre(genre):
This method takes a movie genre as an argument and returns an array of movie titles that belong to that genre. If no movie with that genre is found, it returns null.

### totalPrice():
This method returns the total price of all movies stored in the movies.js file.

### changeMovieGenre(id, newGenre):
This method takes a movie id and the genre to which it should be changed as arguments. If the movie is found in the movies.js file, its genre is updated and the change is saved to the file. If the movie already had the desired genre, an informative message is returned. If no movie with the provided id is found, an error message is returned.

## How to use
To run the application, you need to run the following command in a terminal:

node app.js
The app.js file contains some console.log() statements at the end of the file that can be used to test each of the methods available in the application.

To test the methods, simply uncomment the lines corresponding to the methods you want to test.