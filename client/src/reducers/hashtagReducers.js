export default function hashtagReducers(state = {
	hashtagInput: "",
	hashtags : new Set(),
	count: 0
}, action) {
 
	switch(action.type) {

		case "ADD_HASHTAG":

			if(action.payload.length === 0) {
				return state;
			}
			state = {

				...state,
				hashtags: state.hashtags.add(action.payload)
			}

			console.log("hashtags SET after add: ", state.hashtags);

		break;


		case "REMOVE_HASHTAG":

			//let newState = state;

			let newState = {

				...state,
				hashtags: new Set([...state.hashtags])
				//hashtags: (state.hashtags.delete(action.payload)) ? state.hashtags : state.hashtags
			}
			newState.hashtags.delete(action.payload);
			console.log("hashtags SET after remove: ", newState.hashtags);


			return newState;
		//break;

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