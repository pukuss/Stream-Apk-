import { Outlet } from "react-router-dom"
import ProfileNavigation from "../Components/Page/Admin/ProfileNavigation"
function AsidDashboard() {
  return (
    <>  
        <main className="w-full h-full " >
          <div className="grid grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr]">
            <aside><ProfileNavigation /></aside>
            <section><Outlet /></section>
          </div>
        </main>

    </>
  )
}

export default AsidDashboard