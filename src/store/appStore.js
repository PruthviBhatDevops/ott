import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './slices/userSlice';
import { movieReducer } from "./slices/movieSlice";
import { gptReducer } from "./slices/gpt";
import { configReducer } from "./slices/configSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        config: configReducer
    },
});

export default store;