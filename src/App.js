import "./App.scss";

// Libs
import React from "react";

// Components
import User from "./components/User/User";
import Nav from "./components/Nav/Nav";
import Weather from "./components/Weather/Weather";
import News from "./components/News/News";
import Stocks from "./components/Stocks/Stocks";
import Spotify from "./components/Spotify/Spotify";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <User />
      <Weather />
      <News />
      <Stocks />
      <Spotify />
    </div>
  );
};

export default App;
