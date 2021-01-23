import React from 'react';

export default function ContentHeader () {
	let pageName = window.location.pathname;
	pageName = pageName.substring(pageName.lastIndexOf("/") + 1)
	return (
		<section className="ContentHeader">{pageName}</section>
	)
}