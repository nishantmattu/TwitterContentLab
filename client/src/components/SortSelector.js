import React from "react";

//You do not use the keyword “this”.
// Since it’s not a class you don’t have to reference the component itself.
const SortSelector = (props) => {

	return (
		<div onClick={() => props.setOrder()}>
			{props.orderType}
		</div>
	);

};

export default SortSelector;

