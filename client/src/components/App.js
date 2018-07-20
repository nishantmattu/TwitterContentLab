import React, { Component } from 'react';
//import logo from './logo.svg';
import {connect} from "react-redux";
import SearchPreferences from "./SearchPreferences";
import TweetsFeed from "./TweetsFeed";
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        	<SearchPreferences />
        	<TweetsFeed tweets={this.props.tweets} order={this.props.search}/>
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

