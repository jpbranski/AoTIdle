import React from 'react';
import saveToLocal from '../../util/saveToLocal';
import loadFromLocal from '../../util/loadFromLocal';

export default function LoggedIn () {
	return (
		<section>
			<button className="saveGameButton" onClick={saveToLocal}>Save Game</button>
			<button className="loadLocalButton" onClick={loadFromLocal}>Load Local</button>
			<button className="logOutButton">Log Out</button>
		</section>
	)
}