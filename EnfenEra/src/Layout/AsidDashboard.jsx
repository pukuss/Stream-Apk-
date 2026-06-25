import { Outlet } from "react-router-dom"
import ProfileNavigation from "../Components/Page/Admin/ProfileNavigation"
import { useState } from "react"
import TopNavigation from "../Components/Page/Admin/TopNavigation"

function AsidDashboard() {
  // const [desk, setdesk] = useState(true)
  return (
    <>  
        <main className="w-full h-full " >
          {/* <div className="grid relative grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr]"> */}
          <div
          className="flex w-full h-full  relative  ">

            <aside className="relative h-screen  z-10" >
              <div className="sticky h-full  top-0"><ProfileNavigation /></div>
            </aside>

            <section className="w-full h-full flex flex-col gap-3 z-0 ">
              <div><TopNavigation /></div>
              <div><Outlet /></div>
              </section>
          </div>
        </main>

    </>
  )
}

export default AsidDashboard