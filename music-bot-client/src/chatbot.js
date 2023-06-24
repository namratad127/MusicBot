import React, { useState } from 'react';

function Chatbot() {
    const [query, setQuery] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        })
        .then(response => response.json())
        .then(data => {
            setRecommendations(data.recommendations);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <h1>Chatbot</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange} placeholder="Ask me anything" />
                <button type="submit">Ask</button>
            </form>
            <ul>
                {recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                ))}
            </ul>
        </div>
    );
}

export default Chatbot;
