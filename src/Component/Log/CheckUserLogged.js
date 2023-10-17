import { useDispatch } from "react-redux";
import { AuthActions } from "../../ContxtStore/AuthReducer";

const CheckUserLogged = () => {

    const localTime = localStorage.getItem('logInTime');
    const localToken = localStorage.getItem('expenseToken');

    const dispatch = useDispatch();
            
            if (localTime && localToken)
            {
                const expireTime = Number(localTime) + 30 * 60 * 1000;
                if (Date.now() >= expireTime)
                {
                    dispatch(AuthActions.logout());
                }
                else
                {
                    dispatch(AuthActions.login(localToken));
                }
            }     
}

export default CheckUserLogged

