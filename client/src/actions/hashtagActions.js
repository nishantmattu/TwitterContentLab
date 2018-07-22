

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

export const removeHashtag = (tag) => {

	console.log("removed hashtag action: " + tag);

	//hashtags.delete(tag);
	return ({
		type: "REMOVE_HASHTAG",
		payload: tag

	});
}

export const setCount = (count) => {

	return {
		type: "SET_COUNT",
		payload: count
	};

}



//combine hashtags to query?