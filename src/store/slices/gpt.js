import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showGPT: false
}

export const gptSlice = createSlice({
    name: 'gpt',
    initialState,
    reducers: {
        showGPT: (state) => {
            state.showGPT =!state.showGPT;
        }
    }
})

export const { showGPT } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;