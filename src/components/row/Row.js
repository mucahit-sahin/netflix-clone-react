import { useState, useEffect } from "react";
import React from "react";
import axios from "../../axios";
import "./Row.css";

import Modal from "react-modal";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const img_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  Modal.setAppElement("div");
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalMovie, setModalMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function openModal(movie) {
    setModalMovie(movie);
    movieTrailer(movie.original_title || "").then((url) => {
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get("v"));
    });

    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const opts = {
    maxheight: "100",
    width: "100%",
    position: "absolute",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

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
            alt={movie.original_title}
          ></img>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Close</button>
        <h2>{modalMovie.original_title}</h2>
        <YouTube videoId={trailerUrl} opts={opts} />
      </Modal>
    </div>
  );
}

export default Row;
