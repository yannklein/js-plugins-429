// //////////////////////
// Rehearsal
// //////////////////////

// // 1.Select the button
// const button = document.querySelector("#click-me");
// // 2. Listen to a click
// button.addEventListener("click", (event) => {
//   // 3. Change the DOM (add disabled class and change innerText to loading)
//   // event.currentTarget.classList.add("disabled");
//   event.currentTarget.innerText = "Loading...";
// });

// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements
const input = document.querySelector("#keyword");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

const displayMovies = (movies) => {
  movies.forEach((movie) => {
    results.insertAdjacentHTML(
      "beforeend",
      `<li class='list-inline-item'>
        <img src="${movie.Poster}" alt="" />
        <p>${movie.Title}</p>
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

// 2. Listen to a click
submit.addEventListener("click", (event) => {
  event.preventDefault();
  // 2.5. Fetch the API
  const keyword = input.value;
  fetchMovies(keyword);
});


// //////////////////////
// HTTP POST request
// //////////////////////

const searchAlgoliaPlaces = (event) => {
  fetch(
    "https://places-dsn.algolia.net/1/places/query",
    {
      method: "POST",
      body: JSON.stringify({ query: event.currentTarget.value })
    }
  )
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const search = document.querySelector("#search");
search.addEventListener("keyup", searchAlgoliaPlaces);
