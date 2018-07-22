import React, {Component} from "react";
import SortSelector from "./SortSelector";
import {sortTweets} from "../actions/tweetActions";
import {connect} from "react-redux";

class SortSelections extends Component {
//<SortSelector orderType={"None"} setOrder={() => this.props.sortTweets("None", "", this.props.tweets)}/>
	render() {
		return (

			<div className="sortSelections">
				<h3>Sort By:</h3>


			<div className="dropdown">
			  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    Options:
			  </button>
			  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			    <a className="dropdown-item" href="#"><SortSelector orderType={"Favorites"} setOrder={() => this.props.sortTweets("Favorites", "favorite_count", this.props.tweets)}/>
							</a>
			    <a className="dropdown-item" href="#"><SortSelector orderType={"Retweets"} setOrder={() => this.props.sortTweets("Retweets", "retweet_count", this.props.tweets)}/>
							</a>
			    
			  </div>
			</div>

				
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

export default connect(mapStateToProps, {sortTweets})(SortSelections);