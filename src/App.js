import React, { useState } from "react";
import "./App.css";
import barbieData from "./barbie_photos.json";

function App() {
  const [randomBarbie, setRandomBarbie] = useState(null);

  const handleStartButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * barbieData.length);
    setRandomBarbie(barbieData[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="Barbie-logo"
          src="/images/Barbie_Logo.svg.webp"
          alt="Barbie Logo"
        />
      </header>
      <div className="App-line"></div>
      <body className="App-body">
        <h1> If You Were a Barbie Movie Character, Who Would You Be?</h1>
        <div className="character-app-container">
          {!randomBarbie ? ( // Display placeholder photo if randomBarbie is null
            <div className="character-item">
              <img
                className="character-image"
                src="/images/placeholder-barbie.jpg"
                alt="placeholder photo of barbie with pink ponytale"
              />
              <div className="character-name"></div>
            </div>
          ) : (
            // Display the selected randomBarbie if it's not null
            <div className="character-item">
              <img
                className="character-image"
                src={randomBarbie.link}
                alt={randomBarbie.name}
              />
              <div className="character-name">{randomBarbie.name}</div>
            </div>
          )}
        </div>
        <button className="start-button" onClick={handleStartButtonClick}>
          Start
        </button>
      </body>
    </div>
  );
}

export default App;
