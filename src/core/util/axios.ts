import axios from "axios"
import LocalStorage from "./storage"
import { LOCAL_STORAGE_KEY } from "../constants"
import { generateAuthParameters } from "./security"
import { ConfigEnv } from "~/configs"
import { AuthResponse } from "~/pages/common/dto"
import { AppPath } from "~/routes/path"

const AxiosInstance = axios.create()
let isAlreadyFetchingAccessToken = false
let subscribers: any = []

function onAccessTokenFetched(access_token: any) {
  subscribers = subscribers.filter((callback: any) => callback(access_token))
}

function addSubscriber(callback: any) {
  subscribers.push(callback)
}

AxiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const { config, response } = error
    const originalRequest = config
    if (response && response.status === 406) {
      localStorage.clear()
      window.location.href = AppPath.public.unAuthorized
    }

    if (response && response.status === 401) {
      const refreshToken = LocalStorage.get(LOCAL_STORAGE_KEY.REFRESH_TOKEN)
      const accessToken = LocalStorage.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
      if (refreshToken && accessToken) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          AxiosInstance.post<any, AuthResponse>(`${ConfigEnv.serverAPI}/api/refresh-token`, {
            refreshToken: refreshToken,
          })
            .then((response) => {
              isAlreadyFetchingAccessToken = false
              LocalStorage.set(LOCAL_STORAGE_KEY.ACCESS_TOKEN, response.token)
              LocalStorage.set(LOCAL_STORAGE_KEY.REFRESH_TOKEN, response.refreshToken)
              onAccessTokenFetched(response.token)
            })
            .catch((error) => {
              console.log("🚀 ~ error:", error)
              localStorage.clear()
              window.location.href = AppPath.public.unAuthorized
            })
        }

        const retryOriginalRequest = new Promise((resolve, reject) => {
          addSubscriber(async (access_token: string) => {
            try {
              const { nonce, timestamp, signature, payload } = generateAuthParameters(config)
              originalRequest.headers.Authorization = "Bearer " + access_token
              originalRequest.headers["X-Nonce"] = nonce
              originalRequest.headers["X-Timestamp"] = timestamp.toString()
              originalRequest.headers["X-Signature"] = signature
              originalRequest.headers["X-Payload"] = payload
              const data = await AxiosInstance(originalRequest)
              resolve(data)
            } catch (error: any) {
              console.log("🚀 ~ addSubscriber ~ error:", error)
              reject(error?.response?.data)
            }
          })
        })
        return retryOriginalRequest
      } else {
        localStorage.clear()
        window.location.href = AppPath.public.unAuthorized
      }
    }
    return Promise.reject(error.response.data)
  },
)

AxiosInstance.interceptors.request.use(async (config: any) => {
  const token = LocalStorage.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN)

  const { nonce, timestamp, signature, payload } = generateAuthParameters(config)

  if (typeof token !== "undefined") {
    config.headers.Authorization = `Bearer ${token}`
    config.headers["Access-Control-Allow-Origin"] = "*"
  }

  config.headers["X-Nonce"] = nonce
  config.headers["X-Timestamp"] = timestamp.toString()
  config.headers["X-Signature"] = signature
  config.headers["X-Payload"] = payload

  return config
})

export default AxiosInstance
