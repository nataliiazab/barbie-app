import React, { useState } from "react";
import "./App.css";
import barbieData from "./barbie_photos.json";
import Confetti from "react-confetti";
import { FaLinkedin, FaGithub, FaSync } from "react-icons/fa";

function App() {
  const [randomBarbie, setRandomBarbie] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [userResponses, setUserResponses] = useState({
    sports: null,
    creative: null,
    caring: null,
  });
  const handleLogoClick = () => {
    setShowConfetti(true); // Reset confetti display
    window.location.reload();
  };
  const handleStartButtonClick = () => {
    setShowConfetti(false); // Reset confetti display
    setUserResponses({
      sports: null,
      creative: null,
      caring: null,
    }); // Reset user responses when starting the test
    setShowTest(true); // Show the test component after clicking the "Start" button
  };

  const handleTestResponse = (question, response) => {
    // user's response to the test
    const updatedResponses = { ...userResponses, [question]: response };
    setUserResponses(updatedResponses);

    // To check if all three responses have been collected
    const allResponsesCollected =
      updatedResponses.sports !== null &&
      updatedResponses.creative !== null &&
      updatedResponses.caring !== null;

    if (allResponsesCollected) {
      // All responses collected, proceed with displaying the result

      //change this to a logic rather than random function
      const randomIndex = Math.floor(Math.random() * barbieData.length);

      setRandomBarbie(barbieData[randomIndex]);
      setShowConfetti(true);
      setShowTest(false); // Hide the test component after answering
    }
  };

  const buttonText = randomBarbie ? (
    <>
      Try Again <FaSync />
    </>
  ) : (
    "Start"
  );

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="Barbie-logo"
          src="/images/Barbie_Logo.svg.webp"
          alt="Barbie Logo"
          onClick={handleLogoClick}
        />
      </header>
      <div className="App-line"></div>
      <body className="App-body">
        <h1 className="App-heading">
          If You Were a Barbie Movie Character, Who Would You Be?
        </h1>
        <div className="character-app-container">
          {!showTest && !randomBarbie && (
            // Display placeholder photo if test is not shown and randomBarbie is null
            <div className="character-item">
              <img
                className="character-image"
                src="./images/placeholder-barbie.png"
                alt="barbie with pink ponytail"
              />
              <h2 className="character-name">
                Welcome to Barbie Land, where you can be Barbie (or Ken)
              </h2>
            </div>
          )}
          {showTest && <TestComponent onTestResponse={handleTestResponse} />}
          {!showTest && randomBarbie && (
            // Display the selected randomBarbie if it's not null and the test is not shown
            <div className="character-item">
              <img
                className="character-image"
                src={randomBarbie.link}
                alt={randomBarbie.name}
              />
              <h2 className="character-name">{randomBarbie.name}</h2>
            </div>
          )}
        </div>
        {!showTest && (
          // Render the "Start" button if the test is not shown
          <button className="start-button" onClick={handleStartButtonClick}>
            {buttonText}
          </button>
        )}
      </body>
      <footer className="footer-container">
        <div className="footer-text">© Developed by Nataliia Zablotska</div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/nataliia-zablotska/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/nataliiazab"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </footer>
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={700}
          colors={["#f300a3"]}
          gravity={0.3}
        />
      )}
    </div>
  );
}

// TestComponent to be shown after clicking the "Start" button
function TestComponent({ onTestResponse }) {
  const handleResponse = (question, response, event) => {
    onTestResponse(question, response);

    // Toggle the "clicked" class on the clicked button
    event.target.classList.toggle("clicked");
  };

  return (
    <div className="test-container">
      <h2>Are you into sports and physical activities?</h2>
      <button
        className="answer-button"
        onClick={(event) => handleResponse("sports", "yes", event)}
      >
        Yes
      </button>
      <button
        className="answer-button second-answer-button"
        onClick={(event) => handleResponse("sports", "no", event)}
      >
        No
      </button>

      <h2>Do you enjoy creative and artistic activities?</h2>
      <button
        className="answer-button"
        onClick={(event) => handleResponse("creative", "yes", event)}
      >
        Yes
      </button>
      <button
        className="answer-button second-answer-button"
        onClick={(event) => handleResponse("creative", "no", event)}
      >
        No
      </button>

      <h2>Are you interested in helping and caring for others?</h2>
      <button
        className="answer-button"
        onClick={(event) => handleResponse("caring", "yes", event)}
      >
        Yes
      </button>
      <button
        className="answer-button second-answer-button"
        onClick={(event) => handleResponse("caring", "no", event)}
      >
        No
      </button>
    </div>
  );
}

export default App;
