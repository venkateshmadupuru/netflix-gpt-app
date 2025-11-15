import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_TOP_RATED } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const response = await fetch(TMDB_TOP_RATED, API_OPTIONS);
    const json = await response.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
