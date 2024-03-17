import axios from 'axios'

const headersOptions = ({ url, params }) => {
  const options = {
    method: 'GET',
    url,
    params,
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_KEY,
      'X-RapidAPI-Host': process.env.RAPID_HOST
    }
  }

  return options
}

export const api = async ({ url, params }) => {
  try {
    const response = await axios.request(headersOptions({ url, params }))
    return response.data
  } catch (error) {
    console.error(error)
  }
}
