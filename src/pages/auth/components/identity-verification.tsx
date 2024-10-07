import React from "react"
import { Spin } from "antd"

function IdentityVerificationComponent() {
  return (
    <div>
      <div className="md:max-w-[480px] w-full mx-auto" id="identity-verification-view">
        <div className="h-[calc(100dvh-49px-64px)] border-[1px] border-t-0 border-[#DBDBDB] border-solid">
          <div className="flex justify-center items-center flex-col bg-white h-full gap-2">
            <Spin />
            <span className="text-sm font-semibold text-[#5f5e5e]">Login...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdentityVerificationComponent
