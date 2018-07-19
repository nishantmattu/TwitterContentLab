import React, {Component} from "react";
import SortSelector from "./SortSelector";
import {sortTweets} from "../actions/tweetActions";
import {connect} from "react-redux";

class SortSelections extends Component {

	render() {
		return (

			<div>
				<h3>Sort By:</h3>
				<SortSelector orderType={"Favorites"} setOrder={() => this.props.sortTweets("Favorites")}/>
				<SortSelector orderType={"Retweets"} setOrder={() => this.props.sortTweets("Retweets")}/>
				<SortSelector orderType={"None"} setOrder={() => this.props.sortTweets("None")}/>
				<p>Current Order: {this.props.order}</p>
			</div>

		);
	}
}

const mapStateToProps = (state) => {
	console.log("state order: " + state.tweetReducers.order);
	return {
		order: state.tweetReducers.order
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