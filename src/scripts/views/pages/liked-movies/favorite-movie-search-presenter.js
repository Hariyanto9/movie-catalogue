class FavoriteMovieSearchPresenter {
  constructor(favoriteMovies) {
    // this._queryElement = document.getElementById('query');
    // this._queryElement.addEventListener('change', (event) => {
    //   console.log(event);
    //   this._latestQuery = event.target.value;
    // }); //diganti dengan _listenToSearchRequestByUser

    this._listenToSearchRequestByUser();
    this._favoriteMovies = favoriteMovies;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      // console.log(event);
      this._latestQuery = event.target.value;
      this._favoriteMovies.searchMovies(this._latestQuery);
    });
  }

  // _userQuery diganti menjadi _latestQuery karena pada modul membangun fitur menggunakan TDD ingin mengantisipasi ketika user input movie berkali" namun yang yang akan dikembalikan inputan yang terakhir makanya namanya diubah menjadi latestQuery

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteMovieSearchPresenter;