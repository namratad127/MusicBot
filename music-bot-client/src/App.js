import React, { useState } from 'react';
import './App.css';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userQuery = formData.get('query');
    fetch(`http://localhost:5000/recommendations?query=${userQuery}`)
      .then(response => response.json())
      .then(data => {
        setRecommendations(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MusicBot</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" placeholder="Enter a song name" />
          <button type="submit">Get recommendations</button>
        </form>
        <ul>
          {recommendations.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
