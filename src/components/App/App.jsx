import React from 'react';

import MainNav from '../MainNav/MainNav';
import MainContent from '../MainContent/MainContent';

import '../../util/fonts.css';
import './App.min.css';
import playerStorage from '../../playerData/playerStorage';
import playerInfo from '../../playerData/playerInfo';
import playerSkills from '../../playerData/playerSkills';

import updateTask from '../../util/updateTask';


export default class App extends React.Component {
	
	state = {
		lastSave : "",

		activeTask: "",
		activeCategory: "",
	}

	componentDidMount = () => {

		this.runActiveTasks()
	}

	componentDidUpdate = () => {
		this.startSaves();
	}

	startSaves = () => {
		setInterval(() => {
			this.setState({
				lastSave: new Date().toJSON(),
			})
		}, 300000);
	}

	runActiveTasks = () => {
		let taskInterval;
		let chance;

		function loop() {
			taskInterval = playerInfo.attemptRate === 0 ? 5000 : playerInfo.attemptRate;
			chance = playerInfo.successRate / 100;
			
			if(Math.random() < chance) {
				console.log("success!");
			} else {
				console.log("failure...");
			}
			


			setTimeout(loop, taskInterval);
		  }
		  loop();
	}

	render () {
		return (
			<div className="App">
				<MainNav />
				<MainContent updateTask={this.updateTask} />
				
			</div>
		)	
	}
}