import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const Tweet = (props) => {

		return (

				<li className="tweet" >
					<ul>
						<li>{props.text}</li>
						<li><i className="glyphicon glyphicon-heart"></i> : {props.favorites}</li>
						<li><i className="glyphicon glyphicon-retweet"></i> : {props.retweets}</li>
					</ul>
				</li>
			
		);

};

export default Tweet;