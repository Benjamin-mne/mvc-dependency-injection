export class MovieController {
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  searchMovie = async (req, res, next) => {
    const query = req.params.query

    try {
      const movies = await this.movieModel.searchMovie({ query })
      res.json(movies)
    } catch (error) {
      console.error(error)
      next()
    }
  }

  findMovie = async (req, res, next) => {
    const id = req.params.id

    try {
      const movie = await this.movieModel.findMovie({ id })

      res.json(movie)
    } catch (error) {
      console.error(error)
      next()
    }
  }
}
