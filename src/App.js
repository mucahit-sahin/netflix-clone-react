import React from "react";
import "./App.css";
import Row from "./components/row/Row";
import requests from "./request";

function App() {
  return (
    <div>
      <h1>Netflix Clone Web site</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginal}
      ></Row>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
