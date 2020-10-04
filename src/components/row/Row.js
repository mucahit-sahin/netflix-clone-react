import { useState, useEffect } from "react";
import React from "react";
import axios from "../../axios";
import "./Row.css";

import movieTrailer from "movie-trailer";
import ModalVideo from "react-modal-video";

const img_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function openModal(movie) {
    movieTrailer(movie.original_name || movie.original_title).then((url) => {
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get("v"));
    });
    setOpen(true);
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => openModal(movie)}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${img_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title || movie.name}
          ></img>
        ))}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={trailerUrl}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

export default Row;
