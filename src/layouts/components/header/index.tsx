import "./style.scss"
import { memo } from "react"
import { HeaderLogicProvider } from "./useLogic"

const HeaderUI = () => {
  return (
    <HeaderLogicProvider>
      <header className="fixed z-40 bg-white h-[64px] flex md:max-w-[480px] w-full top-0 right-0 left-1/2 -translate-x-1/2 border-[1px]  border-[#DBDBDB] border-solid">
        <div className="px-4 py-2 flex justify-start gap-4 ">
          <div>{/* <FamilyAppIcon /> */}</div>
          <div className="flex flex-col">
            <p className="font-medium text-[12px] leading-[18px] text-[#777777] m-0">Header</p>
            <h1 className="text-[#3D3D3D] text-[20px] font-medium leading-[30px] m-0"> Project</h1>
          </div>
        </div>
      </header>
    </HeaderLogicProvider>
  )
}

export default memo(HeaderUI)
