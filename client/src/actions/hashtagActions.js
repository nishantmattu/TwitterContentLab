

//enter hashtag

export const onHashtagInputChange = (data) => {

	//console.log("current text in input: " + data);


	return ({
		type: "ON_HASHTAG_INPUT_CHANGE",
		payload: data

	});


}


//add hashtag

export const addHashtag = (data) => {

	console.log("added hashtag action: " + data);

	return ({
		type: "ADD_HASHTAG",
		payload: data


	});
}



//remove hashtag

export const removeHashtag = (data) => {

	console.log("removed hashtag action: " + data);

	return ({
		type: "REMOVE_HASHTAG",
		payload: data

	});
}

export const setCount = (count) => {

	return {
		type: "SET_COUNT",
		payload: count
	};

}



//combine hashtags to query?