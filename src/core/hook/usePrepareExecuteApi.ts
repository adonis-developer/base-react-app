import { useState } from "react"
import { notification } from "antd"

type HookProps<P, R> = {
  apiWillExecute: (payload: P) => Promise<R>
  successMes?: string
  failMes?: string
  isUseServerMes?: boolean
}

type HookData<P, R> = {
  request: (payload: P, callback?: (data: R) => any) => Promise<R | undefined>
  isLoading: boolean
  error: any
  data: R | undefined
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const usePrepareExecuteApi = <P, R>({
  apiWillExecute,
  successMes,
  failMes,
  isUseServerMes,
}: HookProps<P, R>): HookData<P, R> => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState<R>()

  const request = async (payload: P, callback?: (data: R) => any) => {
    try {
      !isLoading && setIsLoading(true)
      const res = await apiWillExecute(payload)
      callback && callback(res)

      if (successMes) {
        notification["success"]({
          message: successMes,
        })
      }

      setData(res)
      setIsLoading(false)
      return res
    } catch (error: any) {
      setIsLoading(false)
      setError(error)
      if (failMes) {
        notification["error"]({
          message: failMes,
        })
      }
      if (isUseServerMes) {
        notification["error"]({
          message: error?.error?.message || "Đã có lỗi xảy ra vui lòng thử lại sau!",
        })
      }
    }
  }

  return { request, isLoading, error, data, setIsLoading }
}

export default usePrepareExecuteApi
