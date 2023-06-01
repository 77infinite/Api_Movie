//variavel para armazenar a chave de api
const API_KEY = "94d6ddd93db63868c339b12a2610f37e"

//criamos a função assíncrona para buscar os filmes

async function getMovies(){
    try{
        //cria uma variavel para armazenar a resposta do link
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        //var para guadar json
        let data = await response.json();
        //passa o json para uma function q exibira os dados no html
        diplayMovie(data.results);
    }catch(error){
        console.log(error);
    }
    
}
//cria a função para mostrar os dados no html
function diplayMovie(movies){
    let moviesContainer = document.getElementById("moviesContainer");
    moviesContainer.innerHTML = "";
    movies.forEach(movie => {
        let movieElement = document.createElement('div')
        movieElement.classList.add('movie') 
        movieElement.innerHTML= `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/> 
        <h2> ${movie.title} </h2>
        <p> ${movie.overview} </p>
        `;
        moviesContainer.appendChild(movieElement);
    })
}

getMovies()