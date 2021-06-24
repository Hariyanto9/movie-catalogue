/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteMovieIdb = {
  // ditambahkan karena terjadi error ketika dilakukan pengecekan ketika menjalankan putMovie
  async getMovie(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllMovies() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putMovie(movie) {
    // pengecekan id movie untuk proses like pada file like movie spec
    if (!movie.hasOwnProperty('id')) {
      return;
    }
    
    return (await dbPromise).put(OBJECT_STORE_NAME, movie);
  },
  async deleteMovie(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  // eslint-disable-next-line no-unused-vars
  async searchMovies(query) {

  },

};

export default FavoriteMovieIdb;
