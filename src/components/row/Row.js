import { useState,useEffect } from "react";
import React from "react";
import axios from "./axios"

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      
    async function getMovies() {}
    getMovies();
  
  }, [])
 
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
