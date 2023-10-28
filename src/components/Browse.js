import useNowPlayingMovies from "./../hooks/useNowPlayingMovies"
import BrowseMoviesContainer from "./BrowseMoviesContainer";
import BrowseVideoContainer from "./BrowseVideoContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <BrowseVideoContainer />
    </div>
  )
}

export default Browse
