
import { configureStore } from "@reduxjs/toolkit"

import AuthReducer from '../ContxtStore/AuthReducer'
import ExpenseReducer from "./ExpenseReducer";
import ModeReducer from "./ModeReducer";

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        expenses: ExpenseReducer,
        Mode: ModeReducer
    }
});

export default store


