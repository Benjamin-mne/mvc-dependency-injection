import dataset from '../db/dataset.json' assert { type: 'json' }

export class MovieLocalModel {
  static async searchMovie ({ query }) {
    try {
      const movies = dataset.filter(movie => movie.title.toLocaleLowerCase().includes(query))
      return movies
    } catch (error) {
      console.error(error)
    }
  }

  static async findMovie ({ id }) {
    try {
      const movies = dataset.filter(movie => movie.id === id)
      return movies
    } catch (error) {
      console.error(error)
    }
  }
}
