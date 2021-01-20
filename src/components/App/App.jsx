import React from 'react';

import MainNav from '../MainNav/MainNav';
import MainContent from '../MainContent/MainContent';

import '../../util/fonts.css';
import './App.min.css';


export default class App extends React.Component {
	render () {
		return (
			<div className="App">
				<MainNav />
				<MainContent />
				
				{/* USE RADIO BUTTONS WITH SAME NAME FOR SKILLS */}
			</div>
		)	
	}
}