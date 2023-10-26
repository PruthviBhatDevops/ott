import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './slices/userSlice';

const user = configureStore({
    reducer: {
        user: userReducer
    },
});

export default user;