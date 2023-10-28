import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: {}
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const { addNowPlayingMovies } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;