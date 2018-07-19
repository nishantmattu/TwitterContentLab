const express = require('express');

const app = express();




	const Twitter = require('twitter-node-client').Twitter;

	//Get this data from your twitter apps dashboard
	const config = require('./config/dev');

    const twitter = new Twitter(config);

	
app.get("/", function(req, res) {
	res.send("hello world");
});

app.get("/searchtweets", function(req, res) {
//res.send("hello world");
	//
//	twitter.getHomeTimeline({ count: '1'}, error, success);

	const error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	const success = function (data) {
    	res.send(data);

	};
//twitter.getUser({ user_id: "nishantmattu" , screen_name: "nishantmattu"}, error, success);
 twitter.getSearch({'q':'#haiku #poetry', 'count': 10}, error, success);

//res.send("hello world");

});

//heroku expects us to listen to incoming http traffic on port
//exposes very specific post
//heroku can inject env var
//var set is underlying runtime that node is on top of
const PORT = process.env.PORT || 5000;


app.listen(PORT);