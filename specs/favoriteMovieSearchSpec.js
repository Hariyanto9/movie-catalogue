/* eslint-disable no-unused-vars */
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import FavoriteMovieSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter';

describe('Searching Movies', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div id="movie-search-container">
      <input id="query" type="text">
      <div class="movie-result-container">
          <ul class="movies">
          </ul>
      </div>
    </div>
    `;
  });


  it('should be able to capture the query typed by the user', () => {
    spyOn(FavoriteMovieIdb, 'searchMovies');
    const presenter = new FavoriteMovieSearchPresenter({
      favoriteMovies: FavoriteMovieIdb,
    });

    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));
 
    expect(presenter.latestQuery)
      .toEqual('film a');
  });

  // mengubah it menjadi fit. fit berfungsi meminta kepada Jasmine untuk hanya menjalankan tes pada metode tersebut sajaagar bisa fokus memperbaiki test ini tanpa merukan test lain
  // spyOn memalsukan FavoriteMovieIdb (mirip seperti model)
  fit('should ask the model to search for liked movies', () => {
    spyOn(FavoriteMovieIdb, 'searchMovies');


    const presenter = new FavoriteMovieSearchPresenter({ favoriteMovies: FavoriteMovieIdb });

    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));

    expect(FavoriteMovieIdb.searchMovies)
      .toHaveBeenCalledWith('film a');
  });
});