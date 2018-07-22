import axios from "axios";

export const sortTweets = (method, param, tweets) => {

//this should sort the tweets based on the method payload
	console.log("sort tweets: " + param + method);
	console.log("sorting here");

	if(tweets.length === 0) {
		method = "None";
	} else {
		tweets.sort(propComparator(param));
	}


	return {
		type: "SORT_TWEETS",
		payload: {
			method: method,
			tweets: tweets
		}
	}

}


const propComparator = (propName) =>
  (b, a) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1


export const fetchTweets = (hashtags, count) => async dispatch => {

	let hashtagStr = "";

	if(count === 0 || hashtags.keys().length === 0) {
		return;
	}

	console.log(hashtags.keys());
	console.log(count);

	for(let a of hashtags.keys()) {
		console.log("h" + a);
		hashtagStr += a + " ";
	}

	console.log(hashtagStr);

			const res = await axios.get('/searchtweets', {
				params : {
					hashtag: hashtagStr,
					count: count
				}
			});

			dispatch({type: "FETCH_TWEETS",payload: res.data});
}

export const fetchTweet = (id) => async dispatch => {

	let hashtagStr = "";



	console.log("id: " + id);


			const res = await axios.get('/searchtweet', {
				params : {
					id: id
				}
			});

			dispatch({type: "FETCH_TWEET",payload: res.data});
}