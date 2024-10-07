import React, { useCallback, useEffect, useState } from "react"
import { Modal } from "antd"
import { useBlocker } from "react-router-dom"
type TransactionPromptProps = {
  when: boolean
  message?: string
}
function TransactionPrompt({ when, message }: TransactionPromptProps) {
  const [open, setOpen] = useState(false)
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) => when && currentLocation.pathname !== nextLocation.pathname,
  )

  const handleOk = useCallback(() => {
    setOpen(false)
    blocker?.proceed && blocker?.proceed()
  }, [blocker])

  const handleCancel = useCallback(() => {
    setOpen(false)
    blocker.reset && blocker.reset()
  }, [blocker])

  useEffect(() => {
    if (blocker.state === "blocked") {
      setOpen(true)
    }
  }, [blocker.state])

  return (
    <div>
      <Modal title="Lời nhắc điều hướng" centered open={open} onOk={handleOk} onCancel={handleCancel}>
        {message ? message : "Bạn chưa lưu thay đổi! Vui lòng lưu trước khi chuyển trang"}
      </Modal>
    </div>
  )
}

export default TransactionPrompt
