export default function tweetReducers(state = {
	order: "None",
	tweets: [],
	search: false,
	clickedTweet: {}
}, action) {

	switch(action.type) {

		case "SORT_TWEETS":
		//sort tweets reducer
		//changes state of tweets, sorts based on order preference

		state = {
			...state,
			order: action.payload.method,
			tweets: action.payload.tweets
		}

		break;

		case "FETCH_TWEETS":
		//fetch tweets reducer
		//adds retrieved tweets to state

		state = {
			...state,
			tweets: action.payload.statuses,
			search: action.payload
		}

		break;

		case "FETCH_TWEET":
		//fetch tweet reducer
		//provides info abouot clickedTweet
		//currently not in use 

		state = {
			...state,
			clickedTweet: action.payload
		}

		break;

		case "SET_ORDER":
		//fetch tweet reducer
		//provides info abouot clickedTweet
		//currently not in use 

		state = {
			...state,
			order: action.payload
		}

		break;

		case "RESET_ORDER":
		//fetch tweet reducer
		//provides info abouot clickedTweet
		//currently not in use 

		state = {
			...state,
			order: action.payload
		}

		break;

		default:
		break;


	}

	return state;

}

