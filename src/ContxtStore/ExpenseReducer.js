

const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    expenses: []
}

const ExpenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        AddExpense(state, action) { 
            state.expenses.push(action.payload);
        }
    }
});





export const ExpenseActions = ExpenseSlice.actions;

export default ExpenseSlice.reducer

