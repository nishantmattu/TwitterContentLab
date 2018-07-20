import React, {Component} from "react";
import SortSelector from "./SortSelector";
import {sortTweets} from "../actions/tweetActions";
import {connect} from "react-redux";

class SortSelections extends Component {
//<SortSelector orderType={"None"} setOrder={() => this.props.sortTweets("None", "", this.props.tweets)}/>
	render() {
		return (

			<div>
				<h3>Sort By:</h3>
				<SortSelector orderType={"Favorites"} setOrder={() => this.props.sortTweets("Favorites", "favorite_count", this.props.tweets)}/>
				<SortSelector orderType={"Retweets"} setOrder={() => this.props.sortTweets("Retweets", "retweet_count", this.props.tweets)}/>
				
				<p>Current Order: {this.props.order}</p>
			</div>

		);
	}
}

const mapStateToProps = (state) => {
	console.log("state order: " + state.tweetReducers.order);
	return {
		order: state.tweetReducers.order,
		tweets: state.tweetReducers.tweets
	};
};

// const mapDispatchToProps = (dispatch) => {

// 	return {
// 		sortTweets: (method) => {
// 			dispatch(sortTweets(method));
// 		}
// 	};

// };



export default connect(mapStateToProps, {sortTweets})(SortSelections);