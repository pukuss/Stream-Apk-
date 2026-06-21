import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth,setLooding,clearAuth } from "../REDUX/Feachour/AuthSlice";
import authService from "../service/auth.service";

function AuthProvider({ children }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.auth.user)

    useEffect(() => {
        async function checkUser() {
            try {
                dispatch(setLooding(true));

                const user = await authService.getCurrentUser();
                console.log(user);
                
                

                if (user) {
                    dispatch(setAuth({ user : user.user, profile: user.profile }));
                    
                } else {
                    dispatch(clearAuth());
                }
            } catch (error) {
                dispatch(clearAuth());
            } finally {
                dispatch(setLooding(false));
            }
        }

        checkUser();
    }, [dispatch]);
    // log data of redux user 
    // console.log(data);
    

    return children;
}

export default AuthProvider;