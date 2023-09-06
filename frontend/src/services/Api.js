import axios from 'axios'
import { API_URL } from '../utils/config.js'

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 sec
})

export const fetchingFactory = async (fetchingFunction) => {
  try {
    const response = await fetchingFunction()

    return { data: response.data, isSuccessful: true }
  } catch (error) {

    return { data: error.response, errorCode: error?.response?.data?.code }
  }
}

export const createProduct = async ({ data }) =>
  fetchingFactory(() => httpClient.post('/products', data))

export const getProducts = async () =>
  fetchingFactory(() => httpClient.get('/products?populate=*'))

export const getProduct = async ({ productId }) =>
  fetchingFactory(() => httpClient.get(`/products/${productId}?populate=*`))

export const deleteProduct = async ({ productId }) =>
  fetchingFactory(() => httpClient.delete(`/products/${productId}`))

export const updateProduct = async ({ productId, data }) =>
  fetchingFactory(() => httpClient.put(`/products/${productId}`, data))

