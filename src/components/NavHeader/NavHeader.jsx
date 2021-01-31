import React from 'react';
import { Link } from 'react-router-dom';

export default function NavHeader() {
	return (
		<section className="NavHeader">
			<h1><Link to="/">Aegis of Terra</Link></h1>
			<h2>dev v1.0.0</h2>
		</section>
	)
}