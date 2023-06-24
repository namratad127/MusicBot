from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'This is the Song Chatbot API'

@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    # Get the user's message from the request data
    message = request.json['message']

    # Use the message to get song recommendations from the Spotify API
    # Put your code here to get recommendations using the message

    # Return the recommendations as a JSON response
    response = {'recommendations': recommendations}
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)



