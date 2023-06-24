import React, { useState, useRef } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleSkip = () => {
    audioRef.current.currentTime += 10;
  };

  return (
    <div>
      <audio ref={audioRef} src="path/to/song.mp3" />
      {isPlaying ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handlePlay}>Play</button>
      )}
      <button onClick={handleSkip}>Skip 10s</button>
    </div>
  );
}

export default App;
