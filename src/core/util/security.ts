import * as CryptoJS from "crypto-js"
import LocalStorage from "./storage"
import { LOCAL_STORAGE_KEY } from "../constants"
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || ""

export const generateAuthParameters = (config: any) => {
  const payload = config.url
  const payloadString = btoa(unescape(encodeURIComponent(JSON.stringify(payload))))

  const nonce = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Base64)
  const timestamp = Math.floor(Date.now() / 1000)

  const message = nonce + timestamp + payloadString + SECRET_KEY
  const signature = CryptoJS.HmacSHA256(message, SECRET_KEY).toString(CryptoJS.enc.Base64)

  return { nonce, timestamp, signature, payload: payloadString }
}

export const isAuthenticated = () => {
  const token = LocalStorage.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
  return { isLogin: true } //TODO: should check token
}

export function encodeCryptoJS(data: string) {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString()
}

export function decodeCryptoJS(encodedData: string) {
  const bytes = CryptoJS.AES.decrypt(encodedData, SECRET_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}
