import React from 'react';
import './App.css';
import Row from "./components/row/Row"
import requests from "./request"

function App() {
  return (
    <div>
      <h1>Netflix Clone Web site</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginal}></Row>
    </div>
  );
}

export default App;
