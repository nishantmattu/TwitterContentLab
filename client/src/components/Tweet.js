import React from "react";


const Tweet = (props) => {

		return (

				<li>
					<ul>
						<li>Text: {props.text}</li>
						<li>Favorite Count: {props.favorites}</li>
						<li>Retweeted Count: {props.retweets}</li>
					</ul>
				</li>
			
		);

};

export default Tweet;