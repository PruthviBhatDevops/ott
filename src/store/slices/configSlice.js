import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: "en"
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload;
        }
    }
})

export const { setLang } = configSlice.actions;
export const configReducer = configSlice.reducer;