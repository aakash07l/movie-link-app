const app = document.getElementById('app');

let movies = [];

function renderMovies() {
  const list = movies.map((movie, i) => `
    <div class="movie-item">
      <strong>${movie.name}</strong><br/>
      <a href="${movie.link}" target="_blank">Watch Now</a>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="container">
      <h1>🎬 Movie Link App</h1>
      <input type="text" id="search" placeholder="Search movie..." oninput="searchMovie()" />
      <input type="text" id="movieName" placeholder="Movie Name" />
      <input type="text" id="movieLink" placeholder="Movie Link (e.g. https://...)" />
      <button onclick="addMovie()">Add Movie</button>
      <div id="movieList">${list}</div>
    </div>
  `;
}

function addMovie() {
  const name = document.getElementById('movieName').value.trim();
  const link = document.getElementById('movieLink').value.trim();
  if (name && link) {
    movies.push({ name, link });
    renderMovies();
  }
}

function searchMovie() {
  const query = document.getElementById('search').value.toLowerCase();
  const filtered = movies.filter(m => m.name.toLowerCase().includes(query));
  const list = filtered.map((movie) => `
    <div class="movie-item">
      <strong>${movie.name}</strong><br/>
      <a href="${movie.link}" target="_blank">Watch Now</a>
    </div>
  `).join('');
  document.getElementById('movieList').innerHTML = list;
}

renderMovies();
