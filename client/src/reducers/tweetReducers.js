export default function tweetReducers(state = {
	order: "None",
	tweets: [],
	search: false,
	clickedTweet: {}
}, action) {

	switch(action.type) {

		case "SORT_TWEETS":
		console.log("SORT_TWEETS");

		state = {
			...state,
			order: action.payload.method,
			tweets: action.payload.tweets
		}
		//console.log("state order is now: " + state.order);

		break;

		case "FETCH_TWEETS":
		//this should sort the tweets
		console.log("FETCH_TWEETS");
		console.log(action.payload);

		state = {
			...state,
			tweets: action.payload.statuses,
			search: action.payload
		}



		console.log("search? " + state.search);

		break;

		case "FETCH_TWEET":
		//this should sort the tweets
		console.log("FETCH_TWEET");
		console.log("fetched tweet: " + action.payload);

		state = {
			...state,
			clickedTweet: action.payload
		}

		

		console.log("search? " + state.search);

		break;



		default:
		break;


	}

	return state;

}

//export default tweetReducers;