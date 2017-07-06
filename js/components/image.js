import React from 'react';

function Image(props) {
	return(
		<div className="gallery-image">
			<img src={props.url} alt={props.description} />
			<p>{props.description}</p>
			</div>
	);
}

export default Image