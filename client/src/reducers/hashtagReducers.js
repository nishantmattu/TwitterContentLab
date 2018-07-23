export default function hashtagReducers(state = {
	hashtagInput: "",
	hashtags : new Set(),
	count: 0
}, action) {
 
	switch(action.type) {

		case "ADD_HASHTAG":
		//add hashtag reducer
		//updates state of currently desired hashtags with additional hashtag

			if(action.payload.length === 0) {
				return state;
			}
			state = {

				...state,
				hashtags: state.hashtags.add(action.payload)
			}

		break;

		case "REMOVE_HASHTAG":
		//remove hashtag reducer
		//updates state of currently desired hashtags by removing selected hashtag

			let newState = {

				...state,
				hashtags: new Set([...state.hashtags])
			}
			newState.hashtags.delete(action.payload);

			return newState;

		case "ON_HASHTAG_INPUT_CHANGE": 
		//on hashtag input change reducer
		//updates state of hashtag form input as user enters characters

		state = {
			...state,
			hashtagInput: action.payload
		}

		break;

		case "SET_COUNT": 
		//set count reducer
		//sets the desired number of tweets to retrieve based on user input

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