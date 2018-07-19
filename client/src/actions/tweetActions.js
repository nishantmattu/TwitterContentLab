import axios from "axios";

export const sortTweets = (method) => {

//?
	console.log(method);

	return {
		type: "SORT_TWEETS",
		payload: method
	}

}


// export const fetchTweets = (res) => {

// 	console.log("fetch tweeets " + res);

// 	return {
// 		type: "FETCH_TWEETS",
// 		payload: res.data
// 	}

// }

export const fetchTweets = () => async dispatch => {
	
			const res = await axios.get('/searchtweets');

			dispatch({type: "FETCH_TWEETS",payload: res.data});
}