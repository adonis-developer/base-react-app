import React from "react"
import { ConfigEnv } from "~/configs"
import ArrowOutwardIcon from "~/core/components/icons/ArrowOutwardIcon"

function FooterUI() {
  const handleClose = () => {
    const linkApp = document.createElement("a")
    linkApp.href = ConfigEnv.familyAppSchema || ""
    linkApp.target = "_blank"
    linkApp.click()
  }
  return (
    <footer>
      <div className="fixed z-40 bg-white h-[72px] flex md:max-w-[480px] w-full bottom-0 right-0 left-1/2 -translate-x-1/2 border-b-[1px] border-t-0 border-r-0 border-l-0 border-[#DBDBDB] border-solid shadow-custom-1">
        <div className="flex items-center justify-center mx-auto">
          <button
            onClick={handleClose}
            className="outline-none border-[1px] border-solid rounded-lg h-[52px] flex items-center justify-center gap-2 px-6 py-4 cursor-pointer"
          >
            <span className="font-medium text-sm leading-[21px]">Footer </span>
            <div className="flex items-center justify-center h-[21px] mt-[-2px]">
              <ArrowOutwardIcon />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default FooterUI
