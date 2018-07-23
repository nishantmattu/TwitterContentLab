import React, {Component} from "react";
import Tweet from "./Tweet";
import {sortTweets} from "../actions/tweetActions";
import {connect} from "react-redux";
//provides structure for layout of the tweet feed
class TweetFeed extends Component {

	constructor(props) {
		super(props);
		this.displayTweets = this.displayTweets.bind(this);
	}



	//display tweets retrieved using list of Tweet components
	displayTweets() {



		if(this.props.tweets === undefined) {
			return;
		}

		let tweets = this.props.tweets;




		//dont sort through render, should be pure
		//sort tweets based on desired sorting order
		tweets.sort(propComparator(this.props.order));

		//provide each Tweet component with properties and display it
		return tweets.map(function(tweet) {

			return (
				<Tweet key={tweet.id} user={tweet.user.screen_name} idStr={tweet.id_str} text={tweet.text} favorites={tweet.favorite_count} retweets={tweet.retweet_count} />
			);
		});

	}

//displays list of retrieved tweets
	render() {

		return (
			<div>

				<ul className="tweetFeed">{this.displayTweets()}</ul>
			</div>
		);

	}

}

const propComparator = (propName) =>
  (b, a) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1



const mapStateToProps = (state) => {
	return {
		order: state.tweetReducers.order
	};
}

export default connect(mapStateToProps, {sortTweets})(TweetFeed);


