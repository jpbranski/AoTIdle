import React, { useEffect } from 'react';

import './ContentHeader.min.css';

export default function ContentHeader () {
	let pageName = window.location.pathname;
	pageName = pageName.substring(pageName.lastIndexOf("/") + 1);
	pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
	if(pageName === ""){pageName = "dev v1.0.0"};

	useEffect(() => {
		document.title = pageName + " | Aegis of Terra";
	})

	return (
		<section className="ContentHeader">
			<h2>{pageName}</h2>
		</section>
	)
}