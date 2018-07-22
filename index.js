const express = require('express');

const app = express();




	const Twitter = require('twitter-node-client').Twitter;

	//Get this data from your twitter apps dashboard
	const config = require('./config/keys');

    const twitter = new Twitter(config);

	
//app.get("/", function(req, res) {
//	res.send("hello world");
//});

app.get("/searchtweets", function(req, res) {
//res.send("hello world");
	//
//	twitter.getHomeTimeline({ count: '1'}, error, success);

	const error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
    	res.send(err);
	};
	const success = function (data) {
		//console.log(data);
    	res.send(data);

	};


	console.log("incoming a: " + req.query.hashtag);
//twitter.getUser({ user_id: "nishantmattu" , screen_name: "nishantmattu"}, error, success);
 twitter.getSearch({'q': req.query.hashtag, 'count': req.query.count, 'result_type': 'recent'}, error, success);

//res.send("hello world");

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
//var set is underlying runtime that node is on top of
const PORT = process.env.PORT || 5000;


app.listen(PORT);