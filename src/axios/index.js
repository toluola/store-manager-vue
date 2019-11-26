import axios from 'axios'

const authToken = localStorage.getItem('store_token')

const Axios = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})

Axios.defaults.headers.common.authorization = authToken

export default Axios
