

//action to update hashtag form field as user inputs hashtag
export const onHashtagInputChange = (data) => {

	return ({
		type: "ON_HASHTAG_INPUT_CHANGE",
		payload: data

	});


}


//action to add hashtag to set of desired hashtags
export const addHashtag = (data) => {

	return ({
		type: "ADD_HASHTAG",
		payload: data


	});
}



//action to remove hashtag to set of desired hashtags
export const removeHashtag = (tag) => {

	return ({
		type: "REMOVE_HASHTAG",
		payload: tag

	});
}

//action to track count for number of desired tweet results
export const setCount = (count) => {

	return {
		type: "SET_COUNT",
		payload: count
	};

}


