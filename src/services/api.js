import axios from 'axios'

axios.defaults.baseURL = 'https://api-19-05-2020.herokuapp.com/'
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

const api = axios

export default api
