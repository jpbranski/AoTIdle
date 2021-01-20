import React from 'react';
import { Link } from 'react-router-dom';

export default function CombatMain () {
	return (
		<section>Combat Main

			<Link to="/combat/battles">battles</Link>
			<Link to="/combat/slayer">slayer</Link>
			<Link to="/combat/expeditions">expeditions</Link>
		</section>
		
	)
}