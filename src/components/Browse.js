import useNowPlayingMovies from "./../hooks/useNowPlayingMovies"
import BrowseMoviesContainer from "./BrowseMoviesContainer";
import BrowseVideoContainer from "./BrowseVideoContainer";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import { useSelector } from "react-redux";

const Browse = () => {

  useNowPlayingMovies();

  const showGPT = useSelector(store => store.gpt?.showGPT);

  return (
    <div>
      <Header />
      {showGPT ? <GPTSearch /> : <> <BrowseVideoContainer />
        <BrowseMoviesContainer /></>}
    </div>
  )
}

export default Browse
