import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_UPCOMING } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const response = await fetch(TMDB_UPCOMING, API_OPTIONS);
    const json = await response.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
