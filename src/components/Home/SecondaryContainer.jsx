import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  if (
    !movies?.length &&
    !popularMovies?.length &&
    !topRatedMovies?.length &&
    !upcomingMovies?.length
  ) return null;
    return (
      <div className="bg-black">
        <div className="md:-mt-52 relative z-10">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
        </div>
      </div>
    );
};

export default SecondaryContainer;
