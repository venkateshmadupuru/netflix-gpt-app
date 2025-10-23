import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-36 md:w-48 flex-shrink-0 pr-4 transform hover:scale-110 transition-all duration-300">
        <img
        src={IMG_CDN_URL+posterPath}
        alt="Movie Card"
        />
    </div>
  )
}

export default MovieCard