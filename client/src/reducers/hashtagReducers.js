export default function hashtagReducers(state = {
	hashtagInput: "",
	hashtags : new Set(),
	count: 0
}, action) {
 
	switch(action.type) {

		case "ADD_HASHTAG":
			state = {

				...state,
				hashtags: state.hashtags.add(action.payload)
			}

			console.log("hashtags SET after add: ", ...state.hashtags);

		break;


		case "REMOVE_HASHTAG":
			state = {

				...state,
				hashtags: state.hashtags.delete(action.payload)
			}
			console.log("hashtags SET after remove: ", ...state.hashtags);

		break;

		case "ON_HASHTAG_INPUT_CHANGE": 

		state = {
			...state,
			hashtagInput: action.payload

		}

		//console.log("current hashtag input: " + state.hashtagInput);
		break;

		case "SET_COUNT": 

		state = {
			...state,
			count: action.payload
		}

		break;

		default:
			return state;


	}

	return state;

};