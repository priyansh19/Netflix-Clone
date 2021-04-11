import React from "react";
import "./App.css";
import Row from "./Components/Row.js";
import requests from "./requests";
import Nav from "./Components/Nav.js";
import Banner from "./Components/Banner.js";

function App() {
  return (
    <div className="app">
      {/* nav */}
      <Nav />
      {/* banner */}
      <Banner />
      {/* rows starts */}
      <Row
        title="Netflix Orignals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
