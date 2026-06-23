import { Outlet } from "react-router-dom"
import ProfileNavigation from "../Components/Page/Admin/ProfileNavigation"
import { useState } from "react"
function AsidDashboard() {
  // const [desk, setdesk] = useState(true)
  return (
    <>  
        <main className="w-full h-full " >
          {/* <div className="grid relative grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr]"> */}
          <div
          className="flex w-full h-full  ">
            <aside className="relative z-10" >
              <div className="sticky top-0"><ProfileNavigation /></div>
            </aside>

            <section className="w-full h-full relative z-0 "><Outlet /></section>
          </div>
        </main>

    </>
  )
}

export default AsidDashboard