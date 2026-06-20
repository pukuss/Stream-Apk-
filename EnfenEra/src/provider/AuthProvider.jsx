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
                
                

                if (user) {
                    dispatch(setAuth({ user, profile: null }));
                   
                    
                } else {
                    dispatch(clearAuth());
                }
            } catch (error) {
                dispatch(clearAuth());
            } finally {
                dispatch(setLooding(false));
                console.log(data);
            }
        }

        checkUser();
    }, [dispatch]);

    return children;
}

export default AuthProvider;