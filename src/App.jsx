import { useState, useRef } from "react";
import React from "react";
import "./App.css";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <div class="container">
        <p class="title">Hi love, Welcome to my Flower Gallery</p>
      </div>

      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="src\assets\tulip.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default App;
