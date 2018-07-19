import React, {Component} from "react";
import {fetchTweets} from "../actions/tweetActions";
import {connect} from "react-redux";
import axios from "axios";

class HashtagsInput extends Component {


	render() {
		return (
			<div>
				<h3>Search #:</h3>
				<div onClick={() => this.props.fetchTweets()}>get data</div>
			</div>
		);
	}



}

// const mapDispatchToProps =  (dispatch) =>  {
// 	return {
// 		fetch: () => async (dispatch) => {
// 			const res = await axios.get('/searchtweets');
// 			dispatch(fetchTweets(res.data));
// 		}
// 	};

// };

export default connect(null, {fetchTweets})(HashtagsInput);