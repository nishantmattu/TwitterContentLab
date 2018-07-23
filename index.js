const express = require('express');

const app = express();




	const Twitter = require('twitter-node-client').Twitter;

	//Get this data from your twitter apps dashboard
	const config = require('./config/keys');

    const twitter = new Twitter(config);

	
//app.get("/", function(req, res) {
//	res.send("hello world");
//});

//twitter.getTweet({ id: '1111111111'}, error, success);


app.get("/searchtweet", function(req, res) {

	const error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
    	console.log("RESPONSE!!!! " + response);
    	console.log("BODY!!!! " +body);
    	res.send(err);
	};
	const success = function (data) {

    	res.send(data);

	};

	console.log("search tweet route a: " + req.query.id);

 twitter.getTweet({ id: req.query.id}, error, success);

});


app.get("/searchtweets", function(req, res) {

	const error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
    	res.send(err);
	};
	const success = function (data) {

    	res.send(data);

	};

	console.log("search tweets route a: " + req.query.hashtag);

 twitter.getSearch({'q': req.query.hashtag, 'count': req.query.count, 'result_type': 'recent'}, error, success);

});


if(process.env.NODE_ENV === 'production') {
	// express will serve up production assets
	//like main.js or main.css
	app.use(express.static('client/build'));

	//express will serve up index.html file if it doesnt recognize route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});


}

//heroku expects us to listen to incoming http traffic on port
//exposes very specific post
//heroku can inject env var
const PORT = process.env.PORT || 5000;


app.listen(PORT);