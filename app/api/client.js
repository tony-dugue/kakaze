import { create } from 'apisauce'
import cache from '../utility/cache'
import authStorage from '../auth/storage'

const apiClient = create({ baseURL: "http://localhost:9000/api" })

const get = apiClient.get

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken()
  if (!authToken) return
  request.headers["x-auth-token"] = authToken
})

apiClient.get = async (url, params, axiosConfig) => {

  const response = await get(url, params, axiosConfig)

  if (response.ok) {
    await cache.store(url, response.data)
    return response
  } else {
    const data = await cache.get(url)
    return data ? { ok: true, data } : response
  }
}

export default apiClient;

