import React, { Component } from 'react';

import {connect} from "react-redux";
import SearchPreferences from "./SearchPreferences";
import TweetsFeed from "./TweetsFeed";


class App extends Component {
  render() {
    return (
      <div className="App">
      		
        	<SearchPreferences />
        	<TweetsFeed  tweets={this.props.tweets} order={this.props.search}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

	return {
		order: state.tweetReducers.order,
		tweets: state.tweetReducers.tweets
	};
}

export default connect(mapStateToProps)(App);

