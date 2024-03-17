import { api } from '../utils/api.js'

export class MovieImdbModel {
  static async searchMovie ({ query }) {
    try {
      const response = await api({ url: `${process.env.API_URL}/find/`, params: { query } })
      const results = response.titleResults.results

      const contract = results.map(({ id, titleNameText, titleReleaseText, titlePosterImageModel }) => {
        return { id, title: titleNameText, release: titleReleaseText, poster: titlePosterImageModel?.url }
      })

      return contract
    } catch (error) {
      console.error(error)
    }
  }

  static async findMovie ({ id }) {
    try {
      const response = await api({ url: `${process.env.API_URL}/v1/title/`, params: { id } })

      const contract = {
        id: response.id,
        title: response.titleText?.text,
        release: response.releaseYear?.year,
        poster: response.primaryImage?.url
      }

      return contract
    } catch (error) {
      console.error(error)
    }
  }
}
