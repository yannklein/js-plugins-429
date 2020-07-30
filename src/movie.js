const input = document.querySelector("#keyword");
const results = document.querySelector("#results");

const displayMovies = (movies) => {
  movies.forEach((movie) => {
    results.insertAdjacentHTML(
      "beforeend",
      `<li class='list-inline-item'>
        <img width="100" src="${movie.Poster}" alt="" />
      </li>`
    );
  });
};

const fetchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      results.innerHTML = "";
      console.log(data);
      // 3. Change the DOM
      displayMovies(data.Search);
    });
};

const searchMovies = (event) => {
  event.preventDefault();
  // 2.5. Fetch the API
  const keyword = input.value;
  fetchMovies(keyword);
};

export { fetchMovies, searchMovies };
