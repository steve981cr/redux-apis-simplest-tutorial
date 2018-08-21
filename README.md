# README

This application goes along with a series of tutorials on using React with an API. Instructions on building this app are at:
Building the Rails API: http://www.techandstartup.org/tutorials/worlds-simplest-redux-with-apis-example

This project was set up with create-react-app.

It uses the Reddit external API for the example.

There is also a version for using your own API back end in the src-articles folder. To use that just rename the src folder to something else and rename src-articles to src. That requires an API with an endpoint at localhost:3001/articles that will return a JSON string of article objects with fields for id, title, and content.

To run the application use:

npm start 

Or if you have Yarn installed use:

yarn start

The app will launch on port 3000.
