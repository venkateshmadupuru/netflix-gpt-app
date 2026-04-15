import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_VIDEOS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideos?.[movieId],
  );
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const response = await fetch(TMDB_MOVIE_VIDEOS(movieId), API_OPTIONS);
      const json = await response.json();

      const results = Array.isArray(json?.results) ? json.results : [];

      const allTrailers = results.filter(
        (video) => video?.type === "Trailer" && video?.site === "YouTube",
      );

      const officialTrailers = allTrailers.filter((video) =>
        (video?.name || "").toLowerCase().includes("official trailer"),
      );

      const trailer =
        officialTrailers[0] || allTrailers[0] || results[0] || null;

      dispatch(addTrailerVideo({ movieId, trailer }));
    } catch {
      dispatch(addTrailerVideo({ movieId, trailer: null }));
    }
  };
  useEffect(() => {
    if (!movieId) return;

    if (trailerVideo !== undefined) return;

    getMovieVideos();
  }, [movieId, trailerVideo]);
};
export default useMovieTrailer;
