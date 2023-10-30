import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        login: (state, action) => {
            return action.payload;
        },
        logout: (state, action) => {
            return {};
        }
    }
})

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;