const moviesInformation = [];

const Movie = function (mTitle, mRate, mYear){
    this.title = mTitle;
    this.rate = mRate;
    this.year = mYear;
}

function addMovie () {
    let isValid = true;

    if (!isTitleValid()) {
        isValid = false
    }

    if (!isRateValid()){
        isValid = false
    }

    if(!isYearValid()) {
        isValid = false
    }
    if (moviesInformation.length >= 10) {
        alert("You cannot add more than 10 movies!");
        return false;
    }
    if (isValid) {
        const movieTitle = document.getElementById("movieTitle").value;
        const movieRate = document.getElementById("movieRate").value;
        const movieYear = document.getElementById("realeaseYear").value;
        const newMovie = new Movie(movieTitle,movieRate,movieYear);
        console.log(newMovie)
        moviesInformation.push(newMovie);
        console.log(moviesInformation);
    }
    return false;
}

function isTitleValid () {
    let movieTitle = document.getElementById("movieTitle").value;
    if (movieTitle === "") {
        document.getElementById("movieTitleError").innerHTML = "Title of the movie is requiered"
        alert("Title of the movie is requiered!")
    } else {
        document.getElementById("movieTitleError").innerHTML = "" 
        return true; 
    }  
}

function isRateValid () {
    
    let movieRate = document.getElementById("movieRate").value;
    if (movieRate === "") {
        document.getElementById("movieRaitingError").innerHTML = "The rating should be an integer from 1 to 5, with 5 being a good movie and 1 a bad movie"
        alert("Rate the movie from 5 to 1! 5 = GOOD, 1 = BAD")
    } else {
        document.getElementById("movieRaitingError").innerHTML = ""
    }

    let rateNumbers = (/^[1-5]+$/);
    if(!rateNumbers.test(movieRate) || movieRate >=5 ) {
        document.getElementById("movieRaitingError").innerHTML = "This section accept just numbers; with 5 being a good movie and 1 a bad movie";
    } else {
        document.getElementById("movieRaitingError").innerHTML = ""
        return true;
    }  
}
function isYearValid () {

    let movieYear = document.getElementById("realeaseYear").value;
    if (movieYear ==="") {
        document.getElementById("movieRealeaseError").innerHTML = "The year when the movie was realeased is requiered"
        alert("Realease year must be type!")
    } else {
        document.getElementById("movieRealeaseError").innerHTML = ""
        return true;
    } 
}

renderList(moviesInformation);

function renderList (movieArray) {
    let movieList = document.getElementById("movieList");
    movieArray.forEach(function(value){
        const movieListItem = document.createElement("li");
        const movieList = document.getElementById("movieList")
        const textNode = document.createTextNode(value);

        movieListItem.appendChild(textNode);
        movieList.appendChild(movieListItem);
    });
}

function btnShowMovie (){
    renderList(moviesInformation);
}

