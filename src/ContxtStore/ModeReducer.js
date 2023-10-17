import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLight: true,
}

const ModeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.isLight = !state.isLight;
        },
    },
    
})

export const ModeAction = ModeSlice.actions;

export default ModeSlice.reducer

