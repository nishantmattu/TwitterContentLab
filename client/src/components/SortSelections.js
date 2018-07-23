import React, {Component} from "react";
import SortSelector from "./SortSelector";
import {sortTweets, setOrder} from "../actions/tweetActions";
import {connect} from "react-redux";

//provides structure for sort selection
class SortSelections extends Component {

	//displays sort selection as a drop down menu
	//currently two options: sort by favorites count or retweets count
	//when an option is clicked, it sets desired order in state
	render() {
		return (

			<div className="sortSelections">
			<div className="dropdown">
			  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			  {this.props.order === "favorite_count" ? "Favorites" : this.props.order === "retweet_count" ? "Retweets" : "Order"}

			  </button>
			  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			    <div className="dropdown-item" ><SortSelector orderType={"Favorites"} orderParam={"favorite_count"} setOrder={() => this.props.setOrder("favorite_count")}/>
							</div>
			    <div className="dropdown-item" ><SortSelector orderType={"Retweets"} orderParam={"retweet_count"} setOrder={() => this.props.setOrder("retweet_count")}/>
							</div>
			    
			  </div>
			</div>

				
				
			</div>

		);
	}
}
//<p>Current Order: {this.props.order}</p>

const mapStateToProps = (state) => {
	return {
		order: state.tweetReducers.order,
		tweets: state.tweetReducers.tweets
	};
};

export default connect(mapStateToProps, {sortTweets, setOrder})(SortSelections);