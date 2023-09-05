import axios from 'axios'
import { API_URL } from '../utils/config'

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 sec
})

export const fetchingFactory = async (fetchingFunction) => {
  try {
    const response = await fetchingFunction()

    return { data: response.data, isSuccessful: true }
  } catch (error) {
    return { data: error, errorCode: error?.response?.data?.code }
  }
}

export const getProducts = async () =>
  fetchingFactory(() => httpClient.get('/products'))

export const getProduct = async ({ productId }) =>
  fetchingFactory(() => httpClient.get(`/products/${productId}`))

export const deleteProduct = async ({ productId }) =>
  fetchingFactory(() => httpClient.delete(`/products/${productId}`))

export const updateProduct = async ({ productId, data }) =>
  fetchingFactory(() => httpClient.put(`/products/${productId}`, data))
