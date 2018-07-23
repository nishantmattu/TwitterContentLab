import React from "react";

//provides functionality for a single sort selection option
const SortSelector = (props) => {

//sets preferred order when selected by user

	return (
		<div className="orderSelector" onClick={() => props.setOrder(props.orderParam)}>
			{props.orderType}
		</div>
	);

};

export default SortSelector;

