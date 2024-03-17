import { Router } from 'express'
import { MovieController } from '../controllers/movie-controllers.js'

export const createMoviesRoutes = ({ movieModel }) => {
  const movieController = new MovieController({ movieModel })

  const moviesRoutes = Router()
  moviesRoutes.get('/search/:query', movieController.searchMovie)
  moviesRoutes.get('/:id', movieController.findMovie)

  return moviesRoutes
}
