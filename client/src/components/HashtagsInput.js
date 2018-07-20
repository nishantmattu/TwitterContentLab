import React, {Component} from "react";
import {fetchTweets} from "../actions/tweetActions";
import {onHashtagInputChange, addHashtag, setCount} from "../actions/hashtagActions";
import {connect} from "react-redux";

class HashtagsInput extends Component {

	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onHashTagChange = this.onHashTagChange.bind(this);
		this.onCountChange = this.onCountChange.bind(this);
	}


	onFormSubmit(e) {
		e.preventDefault();
		//console.log(e);
		//console.log("submitted tag: " + e.target.value);


		this.props.addHashtag(this.props.hashtagInput);
	//	this.props.fetchTweets(this.props.hashtagInput);
		//this.props.onHashtagInputChange("");
		this.props.onHashtagInputChange("");
	}


	onHashTagChange(e) {
		e.preventDefault();
		//console.log(e);
		//console.log("submitted tag: " + e.target.value);


		this.props.onHashtagInputChange(e.target.value);

	}

	onCountChange(e) {
		e.preventDefault();
		//console.log(e);
		//console.log("submitted tag: " + e.target.value);


		this.props.setCount(e.target.value);

	}

	handleFocus(e) {
		e.target.select();
	}

	render() {
		return (
			<div>
				<h3>Enter Hashtag (#):</h3>
				<form onSubmit={this.onFormSubmit}>

					Hashtag: <input type="input" placeholder="ex: #haiku" value={this.props.hashtagInput} onChange={this.onHashTagChange}/>
					Count: <input type="input" placeholder="0"  onFocus={this.handleFocus} onChange={this.onCountChange} value={this.props.count}/>

					<input type="submit" value="Add"  />
					

				</form>
				

				<button onClick={() => this.props.fetchTweets(this.props.hashtags, this.props.count)}>Search</button>

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

const mapStateToProps = (state) => {
	console.log("test");
	return {
		hashtagInput: state.hashtagReducers.hashtagInput,
		hashtags: state.hashtagReducers.hashtags,
		count: state.hashtagReducers.count
	};
}

export default connect(mapStateToProps, {fetchTweets, setCount, onHashtagInputChange, addHashtag})(HashtagsInput);