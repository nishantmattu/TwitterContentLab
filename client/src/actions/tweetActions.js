import axios from "axios";


//action to sort tweets received
export const sortTweets = (param, tweets) => {


	if(tweets.length === 0) {

		param = "None";
	} else {

		tweets.sort(propComparator(param));
	}

	return {
		type: "SORT_TWEETS",
		payload: {
			method: param,
			tweets: tweets
		}
	}

}

//action to set current sorted order after searching
export const setOrder = (order) => {

	return {
		type: "SET_ORDER",
		payload: order
		}
}

//action to reset current sorted order after searching
export const resetOrder = () => {

	return {
		type: "RESET_ORDER",
		payload: "None"
		}
}

//action to send request to twitter api and retrieve tweets based on desired hashtags and number of tweets
export const fetchTweets = (hashtags, count) => async dispatch => {


	let hashtagStr = "";

	if(count === 0 || hashtags.keys().length === 0) {
		return;
	}

	//build hashtags input for query
	//twitter-node-client performs conversions as well
	for(let a of hashtags.keys()) {
		hashtagStr += a + " ";
	}

			const res = await axios.get('/searchtweets', {
				params : {
					hashtag: hashtagStr,
					count: count
				}
			});

			dispatch({type: "FETCH_TWEETS", payload: res.data});
}

//action to send request to twitter api and retrieve tweet based on id_str property...currently not in use
export const fetchTweet = (id) => async dispatch => {

			const res = await axios.get('/searchtweet', {
				params : {
					id: id
				}
			});

			dispatch({type: "FETCH_TWEET",payload: res.data});
}

//function to compare two tweets by given property name
const propComparator = (propName) =>
  (b, a) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
