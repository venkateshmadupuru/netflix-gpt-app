import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_VIDEOS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(TMDB_MOVIE_VIDEOS(movieId), API_OPTIONS);
    const json = await response.json();
    const allTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const officialTrailers = allTrailers.filter((video) =>
      video.name.toLowerCase().includes("official trailer")
    );
    const trailer = officialTrailers[0] || allTrailers[0] || json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
