import { useState,useEffect } from "react";
import React from "react";
import axios from "../../axios"
import "./Row.css"

const img_base_url="https://image.tmdb.org/t/p/original/"

 function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData()
  
  }, [fetchUrl])
 
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {
          movies.map(movie=>(
            <img className="row_poster" src={`${img_base_url}${movie.poster_path}`} alt={movie.original_title}></img>
        ))
        } 
      </div>
    </div>
  );
}

export default Row;