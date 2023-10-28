import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./../store/slices/movieSlice"
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants"

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  const movies = async () => {
    let data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json))
  }

  useEffect(()=>{
    movies();
  },[]);
}

export default useNowPlayingMovies