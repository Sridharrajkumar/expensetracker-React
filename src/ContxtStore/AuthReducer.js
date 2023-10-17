import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('expenseToken') || null,
    isLogged: false
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isLogged = true;
            state.token = action.payload;
            localStorage.setItem('expenseToken', action.payload);
            localStorage.setItem('logInTime', Date.now());
        },
        logout(state) {
            state.isLogged = false;
            state.token = null;
            localStorage.removeItem('expenseToken');
            localStorage.removeItem('logInTime');
            localStorage.removeItem('user');
        }
    }
})


export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer

