import { Outlet } from "react-router-dom"
import HeaderUI from "../components/header"
import FooterUI from "../components/footer"
import { Suspense } from "react"
import { ComponentLoading } from "~/core/components/common/component-loading"

const DefaultLayout = () => {
  return (
    <>
      <HeaderUI />
      <div className="flex mt-[64px]">
        <div className="flex flex-col flex-1 bg-[#ffffff] z-10 ">
          <main className="bg-[var(--body-bg)]">
            <Suspense
              fallback={
                <div className="h-[calc(100vh-64px-72px)] w-full ">
                  <ComponentLoading />
                </div>
              }
            >
              <Outlet></Outlet>
            </Suspense>
          </main>
        </div>
      </div>
      <FooterUI />
    </>
  )
}

export default DefaultLayout
