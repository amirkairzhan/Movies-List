const inputNode = document.getElementById('inputMovie');
const addButtonNode = document.getElementById('addMovieButton');
const moviesList = document.getElementById('moviesList');
const viewedButtonNode = document.getElementById('viewedButton');
const deleteButtonNode = document.getElementById('deleteButton');

let movies = [];

addButtonNode.addEventListener('click', function () {
    getMovieFromUser();

    render();
});

function getMovieFromUser() {
    if (inputNode.value === '') {
        return
    }

    let movie = inputNode.value;

    movies.push(movie);

    inputNode.value = '';
}

function render() {
    moviesList.innerHTML = '';

    movies.forEach((movie, index) => {
        const movieIndex = document.createElement('li');
        movieIndex.className = 'movie';
        
        const viewedMovie = document.createElement('div');
        viewedMovie.className = 'movie__viewed';
        
        viewedMovie.addEventListener('click', () => {
            crossOutMovie(movieIndex, viewedMovie);
        })
        const movieName = document.createElement('div');
        movieName.textContent = movie;
        movieName.className = 'movie__name';

        const deleteButton = document.createElement('div');
        deleteButton.className = 'movie__delete';
       
        deleteButton.addEventListener('click', () => {
            deleteMovie(index);
        });

    movieIndex.appendChild(viewedMovie);
    movieIndex.appendChild(movieName);
    movieIndex.appendChild(deleteButton);  
    moviesList.appendChild(movieIndex);
    })
}

function crossOutMovie(movieIndex, viewedMovie) {
movieIndex.classList.toggle('end__movie');
viewedMovie.classList.toggle('end__viewed');
}

function deleteMovie(index) {
    movies.splice(index,1);
    render()
}