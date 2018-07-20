import React, {Component} from "react";
import Tweet from "./Tweet";

class TweetFeed extends Component {

	constructor(props) {
		super(props);
		this.displayTweets = this.displayTweets.bind(this);
	}


	displayTweets() {

		// let a = [1,2,3];
		const tweets = this.props.tweets;

		return tweets.map(function(tweet) {
			return (
				<Tweet key={tweet.id} text={tweet.text} favorites={tweet.favorite_count} retweets={tweet.retweet_count}/>
			);
		});

	}

	render() {

		return (
			<div>

				<ul>{this.displayTweets()}</ul>
			</div>
		);

	}




}

export default TweetFeed;