import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContentHeader from '../ContentHeader/ContentHeader';
import CombatMain from '../Combat/CombatMain';
import Battles from '../Combat/Battles';
import Slayer from '../Combat/Slayer';
import Expeditions from '../Combat/Expeditions';

import Gathering from '../Gathering/Gathering';
import Farming from '../Gathering/Farming';
import Fishing from '../Gathering/Fishing';
import Hunting from '../Gathering/Hunting';
import Mining from '../Gathering/Mining';
import Woodcutting from '../Gathering/Woodcutting';

import './MainContent.min.css';

export default function MainContent(props) {
	return (
		<main className="MainContent">
			<ContentHeader />
			<Switch>
				<Route exact path="/combat" render={(props) => <CombatMain />} />
				<Route exact path="/combat/battles" component={Battles} />
				<Route exact path="/combat/slayer" component={Slayer} />
				<Route exact path="/combat/expeditions" component={Expeditions} />

				<Route exact path="/gathering" component={Gathering}/>
				<Route exact path="/gathering/farming" component={Farming}/>
				<Route exact path="/gathering/fishing" component={Fishing}/>
				<Route exact path="/gathering/hunting" component={Hunting}/>
				<Route exact path="/gathering/mining" component={Mining}/>
				<Route exact path="/gathering/woodcutting" component={Woodcutting}/>
			</Switch>
		</main>
	)
}