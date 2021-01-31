import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainScreen from './MainScreen';

import Player from '../Player/Player';

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

import Artisan from '../Artisan/Artisan';
import Cooking from '../Artisan/Cooking';
import Crafting from '../Artisan/Crafting';
import Fletching from '../Artisan/Fletching';
import Herbalism from '../Artisan/Herbalism';
import Smithing from '../Artisan/Smithing';
import Tanning from '../Artisan/Tanning';

import Kingdom from '../Kingdom/Kingdom';
import KingdomStorage from '../Kingdom/KingdomStorage';

import './MainContent.min.css';

export default class MainContent extends React.Component {
	// console.log(props);
render () {
	let logStatus = this.props.logStatus;
	return (
		<main className="MainContent">
			<ContentHeader />
			<Switch>
				<Route exact path="/" render={
					() => <MainScreen 
								newPlayer={this.props.newPlayer}
								logStatus={logStatus} 
								userLogIn={this.props.userLogIn} 
								userLogOut={this.props.userLogOut}/>
				} />

				<Route exact path="/player" component={Player} />

				<Route exact path="/combat" render={() => <CombatMain />} />
				<Route exact path="/combat/battles" component={Battles} />
				<Route exact path="/combat/slayer" component={Slayer} />
				<Route exact path="/combat/expeditions" component={Expeditions} />

				<Route exact path="/gathering" component={Gathering}/>
				<Route exact path="/gathering/farming" component={Farming}/>
				<Route exact path="/gathering/fishing" component={Fishing}/>
				<Route exact path="/gathering/hunting" component={Hunting}/>
				<Route exact path="/gathering/mining" component={Mining}/>
				<Route exact path="/gathering/woodcutting" component={Woodcutting}/>

				<Route exact path="/artisan" component={Artisan}/>
				<Route exact path="/artisan/cooking" component={Cooking}/>
				<Route exact path="/artisan/crafting" component={Crafting}/>
				<Route exact path="/artisan/fletching" component={Fletching}/>
				<Route exact path="/artisan/herbalism" component={Herbalism}/>
				<Route exact path="/artisan/smithing" component={Smithing}/>
				<Route exact path="/artisan/tanning" component={Tanning}/>

				<Route exact path="/kingdom" component={Kingdom}/>
				<Route exact path="/kingdom/storage" component={KingdomStorage}/>
			</Switch>
		</main>
	)
}
}