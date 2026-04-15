import useMovieTrailer from "../../hooks/useMovieTrailer";

const TrailerFetcher = ({ movieId }) => {
  useMovieTrailer(movieId);
  return null;
};

export default TrailerFetcher;