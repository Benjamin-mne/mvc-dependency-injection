import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'
import { createMoviesRoutes } from './routes/movie-routes.js'

export const createApp = ({ movieModel }) => {
  const PORT = process.env.PORT ?? 8080
  const app = express()
  config()

  // middlewares
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  // routes
  app.use('/movies', createMoviesRoutes({ movieModel }))

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })
}
