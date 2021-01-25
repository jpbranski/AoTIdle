import React from 'react';

import MainNav from '../MainNav/MainNav';
import MainContent from '../MainContent/MainContent';

import '../../util/fonts.css';
import './App.min.css';
import playerStorage from '../../playerData/playerStorage';
import playerInfo from '../../playerData/playerInfo';
import playerSkills from '../../playerData/playerSkills';

import updateTask from '../../util/updateTask';
import calcTotalLevel from '../../util/calcTotalLevel';
import huntingResources from '../../util/huntingResources';
// import calcSkillLevel from '../../util/calcSkillLevel';


export default class App extends React.Component {
	
	state = {
		logStatus : true,
		lastSave : "",
		activeTask: "",
		activeCategory: "",
	}

	componentDidMount = () => {
		calcTotalLevel();
		updateTask();
		this.runActiveTasks();
		this.startSaves();
	}

	startSaves = () => {
		setInterval(() => {
			this.setState({
				lastSave: new Date().toJSON(),
			});
		}, 1000);
	}



	// takes the current active task and runs it
	runActiveTasks = () => {
		let taskInterval;
		let chance;
		let deplete;

		// checks which category of skill is being trained
		function loop() {
			let currentTask = playerInfo.activeTask;
				if(playerInfo.activeCategory === "fishing"){
					currentTask = "raw " + playerInfo.activeTask;
				} else if(playerInfo.activeCategory === "mining") {
					currentTask = playerInfo.activeTask + " ore";
				} else if(playerInfo.activeCategory === "woodcutting") {
					currentTask = playerInfo.activeTask + " log";
				} else if(playerInfo.activeCategory === "hunting"){
					//compares hunter tasks to resources given
					currentTask = huntingResources(playerInfo.activeTask);
				}

			taskInterval = playerInfo.attemptRate === 0 ? 5000 : playerInfo.attemptRate;
			chance = playerInfo.successRate / 100;
			deplete = playerInfo.depleteChance / 100;
			
			// determines if the player successfully completed the task
			if(Math.random() < chance) {
				playerSkills[playerInfo.activeCategory].experience += playerInfo.expRate;
				playerStorage[currentTask]++;
			} else {

				// if the player fails the task, delay attempt by 2x the attempt rate duration
				if(Math.random() < deplete) {
					let respawn = playerInfo.attemptRate * 2;
					
					setTimeout(console.log("Resource has respawned"), respawn)
				}
			}
			setTimeout(loop, taskInterval);
		}
		loop();
	}

	render () {
		return (
			<div className="App">
				<MainNav />
				<MainContent updateTask={this.updateTask} logStatus={this.state.logStatus} />
				
			</div>
		)	
	}
}