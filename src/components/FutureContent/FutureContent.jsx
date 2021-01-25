import React from 'react';
import './FutureContent.min.css';

export default function FutureContent (props) {
	let version;
	if(!props.version){
		version = "Alpha v1.0.0";
	} else { version = props.version }

	return (
		<div className="FutureContent">
			<h3>This content is planned for a future release!</h3>
			<p>Check back in {version}</p>
		</div>
	)
}