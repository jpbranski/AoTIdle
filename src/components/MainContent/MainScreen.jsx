import React from 'react';

import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

export default function MainScreen (props) {
	console.log(props);
	return (
		<section className="MainScreen">
			<h3>Welcome to Aegis of Terra, Traveler</h3>
			<p>Aegis of Terra Idle is an idle incremental game where you will gather resources, forge equipment, make supplies, and grow your kingdom.</p>

			<p className="disclaimer">This game is a work in progress and is one that I am working on in my spare time around work, additional learning, streaming, and family. Player saves may be unstable or get corrupted as we move through upgrades and optimizations. For assistance, or for feedback or suggestions, please reach out to <a href="https://discord.gg/xjmfvSh" target="_blank" rel="noreferrer">With Faith on Discord</a></p>

			{ (props.logStatus) ? <LoggedIn /> : <LoggedOut />}
		</section>
	)
}