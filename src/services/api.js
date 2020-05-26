import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

axios.defaults.baseURL = 'http://localhost:4000/'
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.request.use(
  (config) => {
    return { ...config, headers: { 'Content-Type': 'application/json' } }
  },

  (error) => {
    const { status } = error.response

    if (status === 401) {
      localStorage.clear()
      window.location = '/'
    }
    return Promise.reject(error)
  }
)

export const getIncidentsByOngId = async (ongId) => {
  // Passando o Id como parâmentro OK!
  const data = await axios.get(`/profile/${ongId}`)

  return data
}

const api = axios

export default api
