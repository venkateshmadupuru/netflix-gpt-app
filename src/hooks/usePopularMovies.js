import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const popularMovies = useSelector(store => store.movies?.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
