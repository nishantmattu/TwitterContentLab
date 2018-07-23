import React, {Component} from "react";
import {fetchTweets, resetOrder, sortTweets} from "../actions/tweetActions";
import {onHashtagInputChange, addHashtag, setCount, removeHashtag} from "../actions/hashtagActions";
import {connect} from "react-redux";
import SortSelections from "./SortSelections";

//provides structure for user inputs
class HashtagsInput extends Component {

	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onHashTagChange = this.onHashTagChange.bind(this);
		this.onCountChange = this.onCountChange.bind(this);
		this.displayHashtags = this.displayHashtags.bind(this);
		this.searchTweets = this.searchTweets.bind(this);
	}



	onFormSubmit(e) {
		//submit form
		//adds hashtag input to set of hashtags
		//refreshes hashtag input field

		e.preventDefault();


		this.props.addHashtag(this.props.hashtagInput);

		this.props.onHashtagInputChange("");
	}


	onHashTagChange(e) {
		//called when hashtag field input changes
		//updates part of state that tracks hashtag field input

		e.preventDefault();

		this.props.onHashtagInputChange(e.target.value);

	}

	onCountChange(e) {
		//called when count field input changes
		//updates part of state that tracks desired number of tweets

		e.preventDefault();

		this.props.setCount(e.target.value);

	}

	handleFocus(e) {
		//focus function for add button for hashtag add button input
		e.target.select();
	}

	displayHashtags() {
		//function that displays entered hashtags in a hashtag block type of structure
		//shows hashtags that state keeps track of
		//provides additional functionality for each hashtag structure
		//can delete hashtags by pressing 'x' displayed on tag
		const tagList = [...this.props.hashtags];


		return tagList.map((tag) => {
			return (
				<li className="block" key={tag} ><span className="hashtag">{tag}<span className="deleteHashtag" onClick={() => this.props.removeHashtag(tag)}>x</span></span></li>
			);
		});

	}

	searchTweets(e) {
		//called when user desires to retrieve tweets after setting inputs
		//calls fetch tweet action with desired hashtags and number of tweets
		this.props.fetchTweets(this.props.hashtags, this.props.count);


		

		//this.props.resetOrder();
	}

	render() {
		return (
			<div className="hashtagsInput">
				<form onSubmit={this.onFormSubmit}>

					Hashtag: <input className="hashtagInput" type="input" placeholder="ex: #haiku" value={this.props.hashtagInput} onChange={this.onHashTagChange}/>
					<input className="addInput" type="submit" value="Add"  />

					# of Tweets: <input className="countInput" type="input" placeholder="0"  onFocus={this.handleFocus} onChange={this.onCountChange} value={this.props.count}/>
					<SortSelections />
					<button type="button" className="btn btn-primary" onClick={this.searchTweets}>Search</button>

				</form>
					
				<ul>{this.displayHashtags()}
				</ul>
				
			</div>
		);
	}



}



const mapStateToProps = (state) => {
	return {
		hashtagInput: state.hashtagReducers.hashtagInput,
		hashtags: state.hashtagReducers.hashtags,
		order: state.tweetReducers.order,
		count: state.hashtagReducers.count, 
		tweets: state.tweetReducers.tweets
	};
}

export default connect(mapStateToProps, {fetchTweets, sortTweets, setCount, onHashtagInputChange, addHashtag, removeHashtag, resetOrder})(HashtagsInput);