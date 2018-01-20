function fetchData() {
    window.fetch('./movies.json')
    .then(toJSON)
    .then(findMovieTitles)
    .then(findMovieImages)
    .then(findMovieDescription);
}

function toJSON(response) {
    return response.json();
}

function findMovieTitles(response) {
    var arrOfMovieTitles = document.getElementsByClassName('movie-title');
    for(var i = 0; i < response.length; i++) {
        arrOfMovieTitles[i].innerHTML = response[i].movie_title;
        arrOfMovieTitles[i].setAttribute('href', response[i].movie_link);
    }
    return response;
}

function findMovieImages(response) {
    var arrOfMovieImgs = document.getElementsByClassName('movie-pic');
    console.log(arrOfMovieImgs);
    for(var i = 0; i < response.length; i++) {
        arrOfMovieImgs[i].setAttribute('src', response[i].movie_pic);
    }
    return response;
}

function findMovieDescription(response) {
    var arrOfMovieDesc = document.getElementsByClassName('movie-desc');
    for(var i = 0; i < response.length; i++) {
        arrOfMovieDesc[i].innerHTML = response[i].movie_description;
    }
    return response;
}

fetchData();