export const BANNER_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_small.jpg";
export const DICEBEAR_AVATAR_URL =
  "https://api.dicebear.com/7.x/avataaars/svg?seed=";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI4OTczMGIxNDIzMGYxNzE4YzQyOGU1NjFmM2U0MSIsIm5iZiI6MTc1MDI1MzcwOS44NDA5OTk4LCJzdWIiOiI2ODUyYzA4ZGQ1MGVhY2M5ZWUwNjYxYzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.msS5i0qhxKrHGKw_84hoxh1VKmUg1QuPu2RIMp1vXVg",
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie";
export const TMDB_NOW_PLAYING = `${TMDB_BASE_URL}/now_playing?page=1`;
export const TMDB_POPULAR = `${TMDB_BASE_URL}/popular?page=1`;
export const TMDB_TOP_RATED = `${TMDB_BASE_URL}/top_rated?page=1`;
export const TMDB_UPCOMING = `${TMDB_BASE_URL}/upcoming?page=1`;
export const TMDB_MOVIE_VIDEOS = (id) =>
  `${TMDB_BASE_URL}/${id}/videos?language=en-US`;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "french", name: "French" },
  { identifier: "german", name: "German" },
  { identifier: "chinese", name: "Chinese" },
  { identifier: "japanese", name: "Japanese" },
  { identifier: "russian", name: "Russian" },
  { identifier: "portuguese", name: "Portuguese" },
  { identifier: "telugu", name: "Telugu" },
];
