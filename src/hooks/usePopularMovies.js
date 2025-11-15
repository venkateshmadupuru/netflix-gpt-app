import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_POPULAR } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(TMDB_POPULAR, API_OPTIONS);
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
