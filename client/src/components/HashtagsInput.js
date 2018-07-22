import React, {Component} from "react";
import {fetchTweets} from "../actions/tweetActions";
import {onHashtagInputChange, addHashtag, setCount, removeHashtag} from "../actions/hashtagActions";
import {connect} from "react-redux";

class HashtagsInput extends Component {

	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onHashTagChange = this.onHashTagChange.bind(this);
		this.onCountChange = this.onCountChange.bind(this);
		this.displayHashtags = this.displayHashtags.bind(this);
	}


	onFormSubmit(e) {
		e.preventDefault();


		this.props.addHashtag(this.props.hashtagInput);

		this.props.onHashtagInputChange("");
	}


	onHashTagChange(e) {
		e.preventDefault();

		this.props.onHashtagInputChange(e.target.value);

	}

	onCountChange(e) {
		e.preventDefault();

		this.props.setCount(e.target.value);

	}

	handleFocus(e) {
		e.target.select();
	}

	displayHashtags() {

		const tagList = [...this.props.hashtags];

		return tagList.map((tag) => {
			return (
				<li className="block" key={tag} ><span className="hashtag">{tag}<span className="deleteHashtag" onClick={() => this.props.removeHashtag(tag)}>x</span></span></li>
			);
		});

	}

	render() {
		return (
			<div className="hashtagsInput">
				<h3>Enter Hashtag (#):</h3>
				<form onSubmit={this.onFormSubmit}>

					Hashtag: <input className="hashtagInput" type="input" placeholder="ex: #haiku" value={this.props.hashtagInput} onChange={this.onHashTagChange}/>
					<input type="submit" value="Add"  />


					# of Tweets: <input className="countInput" type="input" placeholder="0"  onFocus={this.handleFocus} onChange={this.onCountChange} value={this.props.count}/>
					
					<button type="button" className="btn btn-primary" onClick={() => this.props.fetchTweets(this.props.hashtags, this.props.count)}>Search</button>


				</form>
					
				<ul>{this.displayHashtags()}


				</ul>
				

				

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

export default connect(mapStateToProps, {fetchTweets, setCount, onHashtagInputChange, addHashtag, removeHashtag})(HashtagsInput);