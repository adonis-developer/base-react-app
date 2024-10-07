import { Spin } from "antd"

export function ComponentLoading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Spin></Spin>
    </div>
  )
}
