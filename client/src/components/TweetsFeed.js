import React, {Component} from "react";
import Tweet from "./Tweet";

class TweetFeed extends Component {

	constructor(props) {
		super(props);
		this.displayTweets = this.displayTweets.bind(this);
	}


	displayTweets() {

		const tweets = this.props.tweets;

		if(tweets === undefined) {
			return;
		}
		return tweets.map(function(tweet) {

			return (
				<Tweet key={tweet.id} user={tweet.user.screen_name} idStr={tweet.id_str} text={tweet.text} favorites={tweet.favorite_count} retweets={tweet.retweet_count} />
			);
		});

	}

	render() {

		return (
			<div>

				<ul className="tweetFeed">{this.displayTweets()}</ul>
			</div>
		);

	}

}

export default TweetFeed;