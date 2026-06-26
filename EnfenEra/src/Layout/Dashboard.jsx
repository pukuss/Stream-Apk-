import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SlideMenu from "../Components/Page/supperAdmin/nav/SlideMenu";
import TopNavigation from "../Components/Page/supperAdmin/nav/TopNavigation";




function Dashboard() {
  const [showTopNav, setShowTopNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // scroll down
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowTopNav(false);
      } 
      // scroll up
      else {
        setShowTopNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full min-h-screen relative">
      <div className="flex w-full min-h-screen relative bg">
        
        {/* Sidebar */}
        <aside className="sticky top-0 h-screen z-50 self-start">
          {/* <ProfileNavigation /> */}
          <SlideMenu />
        </aside>

        {/* Main Content */}
        <section className="w-full min-h-screen flex flex-col z-0">
          
          {/* Top Navigation */}
          <div
            className={`
              sticky top-0 z-50 transition-transform duration-300 ease-in-out
              ${showTopNav ? "translate-y-0" : "-translate-y-full"}
            `}
          >
            <TopNavigation />
          </div>

          {/* Page Content */}
          <div className="flex-1 relative z-0">
            <Outlet />
          </div>
        </section>

      </div>
    </main>
  );
}

export default Dashboard;