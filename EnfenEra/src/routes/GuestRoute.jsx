import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from '../Components/horizon/Looding'


function GuestRoute() {
    const user = useSelector((state)=> state.auth.user);
    const looading = useSelector((state) => state.auth.looading) 

    if(looading) {
        return <div> <Loading /> </div>
    }
    if (user) {
        return <Navigate to="/Profile" replace />;
    }

    return <Outlet />
}

export default GuestRoute;
