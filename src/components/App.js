// src/App.js
import React, { useState } from 'react';
import './App.css';
import GolfBall from './GolfBall';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [ballPosition, setBallPosition] = useState(0);

  const handleStartClick = () => {
    setGameStarted(true);
  };

  const handleKeyDown = (e) => {
    if (gameStarted) {
      if (e.key === 'ArrowRight' || e.keyCode === 39) {
        // Move the ball 5 pixels to the right
        setBallPosition((prevPosition) => prevPosition + 5);
      }
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
      {!gameStarted ? (
        <button className="start" onClick={handleStartClick}>
          Start
        </button>
      ) : null}
      {gameStarted ? <GolfBall position={ballPosition} /> : null}
    </div>
  );
}

export default App;
