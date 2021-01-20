import React from 'react';
import { NavLink } from 'react-router-dom';

import playerInfo from '../../playerData/playerInfo';

export default function NavList() {
	return (
		<section className="NavList">
			<h2 className="playerName">{playerInfo.name}</h2>
			<ul>
				<li className="navHealth">Health: <span>{playerInfo.health}</span></li>
				<li className="navTotal">Total: <span>{playerInfo.totalLevel}</span></li>
				<li className="navGold">Gold: <span>{playerInfo.gold}</span></li>
				<li><NavLink to="/combat" activeClassName="activeNav">Combat</NavLink></li>
				<li><NavLink to="/gathering" activeClassName="activeNav">Gathering</NavLink></li>
				<li><NavLink to="/artisan" activeClassName="activeNav">Artisan</NavLink></li>
				<li><NavLink to="/kingdom" activeClassName="activeNav">Kingdom</NavLink></li>
			</ul>
		</section>
	)
}