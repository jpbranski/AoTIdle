import React from 'react';
import { NavLink } from 'react-router-dom';

import playerInfo from '../../playerData/playerInfo';

export default function NavList( props ) {
	return (
		<section className="NavList">
			<h2 className="playerName"><NavLink to="/player" onClick={props.toggleNav}>{playerInfo.name}</NavLink></h2>
			<ul>
				<li className="navHealth">Health: <span>{playerInfo.currentHealth}</span></li>
				<li className="navGold">Gold: <span>{playerInfo.gold}</span></li>
				<li><NavLink to="/combat" activeClassName="activeNav" onClick={props.toggleNav}>Combat</NavLink></li>
				<li><NavLink to="/gathering" activeClassName="activeNav" onClick={props.toggleNav}>Gathering</NavLink></li>
				<li><NavLink to="/artisan" activeClassName="activeNav" onClick={props.toggleNav}>Artisan</NavLink></li>
				<li><NavLink to="/kingdom" activeClassName="activeNav" onClick={props.toggleNav}>Kingdom</NavLink></li>
			</ul>
		</section>
	)
}