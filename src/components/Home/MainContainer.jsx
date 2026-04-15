import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import TrailerFetcher from "./TrailerFetcher";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  const trailerVideos = useSelector((state) => state.movies?.trailerVideos);

  if (!movies) return;

  const mainMovie =  movies.find((movie) => trailerVideos?.[movie.id]) ||
    movies[0];
    const { original_title, overview, id } = mainMovie;
  if (!mainMovie) return null;
  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      {movies.slice(0, 5).map((movie) => (
        <TrailerFetcher key={movie.id} movieId={movie.id} />
      ))}
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
