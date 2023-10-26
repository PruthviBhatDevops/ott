import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.totalUsers = action.payload;
        },
        logout: (state, action) => {
            return {};
        }
    }
})

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;