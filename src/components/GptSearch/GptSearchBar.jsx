import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../../utils/openai";
import { addGptMovieResult } from "../../utils/gptSlice";
import { API_OPTIONS } from "../../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  if (!langkey) return null;
  //search movies in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ".only give me names of 5 movies, comma separated like the example result given ahead.Example:Bhahubali,Kalki AD900,Krish,PK";

    const getMovies = await client.responses.create({
      model: "gpt-3.5-turbo",
      instructions: "You are a coding assistant that talks like a pirate",
      input: gptQuery,
    });

    if (!getMovies.output_text) return null;
    const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: getMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center items-center px-4 text-lg">
      <form
        className="w-full max-w-2xl bg-white flex rounded-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
          className="flex-grow pl-6 text-black focus:outline-none"
        />
        <button
          className="bg-gradient-to-bl from-pink-700 via-red-600 to-rose-600 
          transform hover:scale-105 transition-transform duration-300
           text-white text-xl py-4 px-6 font-semibold rounded-full cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
