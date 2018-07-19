export default function tempReducers(state = {
	name: "max",
	age: 3
}, action) {

	switch(action.type) {

		case "NAME":
		console.log("NAME");

		state = {
			...state,
			name: action.payload
		}
		console.log("asdfasdf: " + state.order);

		break;

		case "AGE":
		console.log("AGE");
		
		break;

		default:
		break;


	}

	return state;

}

//export default tempReducers;