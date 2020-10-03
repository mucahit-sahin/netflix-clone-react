import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, boyut) {
    return str?.length > boyut ? str.substr(0, boyut - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: ` url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <div className="banner_title">
          <h1>{movie.original_title}</h1>
        </div>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h4 className="banner_description">{truncate(movie.overview, 150)}</h4>
      </div>
      <div className="banner_fadebottom"></div>
    </header>
  );
}

export default Banner;
