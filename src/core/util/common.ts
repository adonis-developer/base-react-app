import { notification } from "antd"
import { v4 as uuid } from "uuid"
export const convertVnd = (money: number) => {
  if (!money) return "0đ"
  return money.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })
}

type NotificationArgs = {
  type: "error" | "success" | "warning" | "info"
  title: React.ReactNode
  description: React.ReactNode
}

const showMessageNotification = ({ type, title, description }: NotificationArgs) => {
  notification[type]({
    message: title,
    description,
  })
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

async function convertUrlToBlob(videoUrl: string) {
  const response = await fetch(videoUrl)
  const blob = await response.blob()
  return blob
}

async function genUUID() {
  return uuid()
}

export { showMessageNotification, scrollTop, convertUrlToBlob, genUUID }
