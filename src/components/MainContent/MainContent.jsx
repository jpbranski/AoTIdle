import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContentHeader from '../ContentHeader/ContentHeader';
import CombatMain from '../Combat/CombatMain';
import Battles from '../Combat/Battles';
import Slayer from '../Combat/Slayer';
import Expeditions from '../Combat/Expeditions';
import Gathering from '../Gathering/Gathering';

export default function MainContent() {
	return (
		<main className="MainContent">
			<ContentHeader />
			<Switch>
				<Route exact path="/combat" render={(props) => <CombatMain />} />
				<Route exact path="/combat/battles" component={Battles} />
				<Route exact path="/combat/slayer" component={Slayer} />
				<Route exact path="/combat/expeditions" component={Expeditions} />
				<Route exact path="/gathering" component={Gathering}/>
			</Switch>
		</main>
	)
}