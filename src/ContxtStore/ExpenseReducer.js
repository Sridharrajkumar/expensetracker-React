

const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    expenses: [],
    totalExpenses: null,
    ispremium: false
    
}

const ExpenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        AddExpense(state, action) { 
            state.expenses.push(action.payload);
            state.totalExpenses = state.totalExpenses + Number(action.payload.price);
        },
        resetExpense(state) {
            state.expenses = [];
            state.totalExpenses = 0; 
        },
        editExpense(state, action) { 
            let { id, editedExpense } = action.payload;
            console.log('Editing expense with ID:', id);
            console.log('Edited expense:', editedExpense);
            let index = state.expenses.findIndex((expense) => expense.id === id);
            if (index !== -1) {
                state.totalExpenses = state.totalExpenses - Number(state.expenses[index].price);
                state.expenses[index] = editedExpense;
                state.totalExpenses = state.totalExpenses + Number(editedExpense.price);
            }

        },
        deleteExpense(state, action) {
            const expenseToDelete = action.payload;
            const deleteExpense = state.expenses.find(expense => expense.id === expenseToDelete);
            state.totalExpenses = state.totalExpenses - Number(deleteExpense.price);
            state.expenses = state.expenses.filter(expense => expense.id !== expenseToDelete);
        },
        activatePremiumMode(state) {
            state.ispremium = true
        }
    }
});

export const ExpenseActions = ExpenseSlice.actions;

export default ExpenseSlice.reducer

