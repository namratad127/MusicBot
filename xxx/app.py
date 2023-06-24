import os
import sys
import json
import spotipy
import requests
import random
from flask_cors import cross_origin
from flask_cors import CORS
from flask import Flask, jsonify, request
from spotipy.oauth2 import SpotifyClientCredentials

app = Flask(__name__)
cors = CORS(app)


with open("./config.json") as config:
    conf_data = json.load(config)


# Set up Spotipy with your client ID and client secret
client_id = conf_data.get("client_id")
client_secret = conf_data.get("client_secret")
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Function to get song recommendations
def get_recommendations(query):
    recommendations = []
    results = sp.search(q=query, type='track', limit=10)
    for track in results['tracks']['items']:
        recommendations.append(track['name'] + ' - ' + track['artists'][0]['name'])
    return recommendations

@app.route('/recommendations')
@cross_origin()
def recommendations():
    query = request.args.get('query')
    recommendations = get_recommendations(query)
    return jsonify(data=recommendations)


if __name__ == '__main__':
    app.run()
