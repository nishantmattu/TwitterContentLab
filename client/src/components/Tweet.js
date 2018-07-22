import React, {Component} from "react";
import 'font-awesome/css/font-awesome.min.css';



const Tweet = (props) => {


		return (
				<li>
				
				<div className="divider"></div>
				<div className="tweet" onClick={() => window.open("http://twitter.com/" +props.user + "/status/" + props.idStr)}>
					
						<div className="tweetDescription"><div className="tweetText">{props.text}</div></div>
						<div><div className="favoritesIcon"><i className="glyphicon glyphicon-heart heart"></i> {props.favorites}</div><div className="retweetsIcon"><i className="glyphicon glyphicon-retweet retweet"></i> {props.retweets}</div></div>
					
					</div>
					
				</li>
			
		);
	

};
export default Tweet;

