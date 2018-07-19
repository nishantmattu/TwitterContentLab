export default function tweetReducers(state = {
	order: "None",
	tweets: []
}, action) {

	switch(action.type) {

		case "SORT_TWEETS":
		console.log("SORT_TWEETS");

		state = {
			...state,
			order: action.payload
		}
		console.log("state order is now: " + state.order);

		break;

		case "FETCH_TWEETS":
		console.log("FETCH_TWEETS");
		console.log(action.payload);

		break;

		default:
		break;


	}

	return state;

}

//export default tweetReducers;