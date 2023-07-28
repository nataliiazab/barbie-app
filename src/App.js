import React, { useState } from "react";
import "./App.css";
import barbieData from "./barbie_photos.json";
import Confetti from "react-confetti";

function App() {
  const [randomBarbie, setRandomBarbie] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStartButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * barbieData.length);
    setRandomBarbie(barbieData[randomIndex]);
    setShowConfetti(true);
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
        <h1 className="App-heading">
          If You Were a Barbie Movie Character, Who Would You Be?
        </h1>
        <div className="character-app-container">
          {!randomBarbie ? ( // Display placeholder photo if randomBarbie is null
            <div className="character-item">
              <img
                className="character-image"
                src="./images/placeholder-barbie.png"
                alt="placeholder photo of barbie with pink ponytale"
              />
              <h2 className="character-name">
                Welcome to Barbie Land, where you can be Barbie (or Ken)
              </h2>
            </div>
          ) : (
            // Display the selected randomBarbie if it's not null
            <div className="character-item">
              <img
                className="character-image"
                src={randomBarbie.link}
                alt={randomBarbie.name}
              />
              <h2 className="character-name">
                You would be {randomBarbie.name}
              </h2>
            </div>
          )}
        </div>
        <button className="start-button" onClick={handleStartButtonClick}>
          Start
        </button>
        {showConfetti && <Confetti recycle={false} numberOfPieces={100} />}
      </body>
      <footer className="footer-container">
        © Developed by Natalie Zablotska -&nbsp;{" "}
        <a
          href="https://www.linkedin.com/in/nataliia-zablotska/"
          target="_blank"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;
