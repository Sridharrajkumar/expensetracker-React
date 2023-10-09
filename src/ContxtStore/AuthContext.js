import { createContext, useState,useEffect } from "react";

export const AuthContext = createContext({
    token: '',
    islogged: false,
    login: (token) => {
        
    },
    logOut: () => {
        
    }

});



const AuthContextProvider = (props) => {

    const localToken = localStorage.getItem('expenseToken');

    const [token, setToken] = useState(localToken);
    const loggedIn = (!!token);
    console.log(loggedIn);

    const LogInhandler = (token) => {
        setToken(token);
        localStorage.setItem('expenseToken', token);
        localStorage.setItem('logInTime', Date.now())
    }

    const LogoutHandler = () => {  
        setToken(null);
        localStorage.removeItem("expenseToken");  //remove the item from storage
        localStorage.removeItem("logInTime");
        

    }

    const checkLogIn = () => {

        const localTime = localStorage.getItem('logInTime')
        
        if (localTime && localToken)
        {
            const expireTime = Number(localTime) + 5 * 60 * 1000;
            if (Date.now() >= expireTime)
            {
                setToken(null);
                localStorage.removeItem('expenseToken')
                localStorage.removeItem('logInTime')
            }
        }
        
    }

    useEffect(() => {
        checkLogIn();
    })

    const Auth = {
        token: token,
        islogged: loggedIn,
        login: LogInhandler,
        logOut:LogoutHandler
        
    }
    return (
        <AuthContext.Provider value={Auth}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider