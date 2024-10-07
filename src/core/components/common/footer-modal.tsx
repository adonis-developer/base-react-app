import React from "react"

type TypeProps = {
  onOk?: () => any
  onCancel?: () => any
  cancelText?: React.ReactNode
  okText?: React.ReactNode
  okClass?: string
  cancelClass?: string
  disabledOk?: boolean
  disabledCancel?: boolean
}

function FooterModal({
  onOk,
  onCancel,
  cancelText = "Cancel",
  okText = "Accept",
  cancelClass,
  okClass,
  disabledOk = false,
  disabledCancel = false,
}: TypeProps) {
  return (
    <div className="flex gap-4 items-center justify-end">
      {!disabledCancel && (
        <button
          className={`${cancelClass} disabled:opacity-75 disabled:cursor-not-allowed outline-none border-none w-[100px] h-full rounded-full bg-[#bdc3c7] text-xl text-white p-1 `}
          onClick={onCancel}
        >
          {cancelText}
        </button>
      )}
      {!disabledOk && (
        <button
          className={`${okClass} disabled:opacity-75 disabled:cursor-not-allowed outline-none border-none w-[100px] h-full rounded-full bg-[#A75D5D]  text-xl text-white p-1 `}
          onClick={onOk}
        >
          {okText}
        </button>
      )}
    </div>
  )
}

export default FooterModal
