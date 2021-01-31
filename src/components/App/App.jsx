import React from 'react';

import MainNav from '../MainNav/MainNav';
import MainContent from '../MainContent/MainContent';

import '../../util/fonts.css';
import './App.min.css';
import playerStorage from '../../playerData/playerStorage';
import playerInfo from '../../playerData/playerInfo';
import playerSkills from '../../playerData/playerSkills';
import skillCategories from '../../gameData/skillCategories';

import huntingResources from '../../util/huntingResources';
import randomChance from '../../util/randomChance';


export default class App extends React.Component {
	
	state = {
		logStatus : true,
		lastSave : "",

		activeTask: "",
		activeCategory: "",
		taskInterval: 5000,
		taskChance: 0,
		depleteChance: 0,
		respawnRate: 0,

		ranNum: 0,
	}

	componentDidMount = () => {
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


	createNewPlayer = (e) => {
		e.preventDefault();
		playerInfo.name = document.getElementsByName("userName")[0].value;
		fetch(`http://localhost:8080/users`, {
			method: 'POST',
			mode: 'cors',
			header: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username : document.getElementsByName("userName")[0].value,
				password : document.getElementsByName("pwkey")[0].value,
			})
		})
		.then(response => response.json())
		.then(data => {
			console.log("success", data)
			this.setState({
				logStatus : true,
			})

		})
		.catch((err) => {
			
		});
	}

	userLogIn = (e) => {
		console.log("logged in");
		this.setState({
			logStatus: true,
		})
	}

	userLogOut = (e) => {
		console.log("logged out");
		this.setState({
			logStatus: false,
		})
	}

	// takes the current active task and runs it
	runActiveTasks = () => {	
		const loop = () => {		
			this.checkTaskUpdates();
			let skillGroup = this.getTaskGroup();
			if( skillGroup === false ) {

			} else if ( skillGroup === "gathering" ) {
				this.runGatheringSkill();
			} else if ( skillGroup === "artisan" ) {
				this.runArtisanSkill();
			}
			setTimeout(loop, this.state.taskInterval)
		}
		
		loop();
	}

	checkTaskUpdates() {
		if( this.state.activeTask !== playerInfo.activeTask ) {
			this.setState({
				activeCategory : playerInfo.activeCategory,
				activeTask : playerInfo.activeTask,
				taskInterval : playerInfo.attemptRate,
				taskChance : playerInfo.successRate / 100,
				depleteChance : playerInfo.depleteChance / 100,
				respawnRate : playerInfo.depleteChance / 100 * 2,
			});	
		} else { return; }
	}

	getTaskGroup() {
		// console.log("get task group")
		if(skillCategories.gatheringSkills.indexOf(playerInfo.activeCategory) >= 0) {
			return "gathering";
		} else if(skillCategories.artisanSkills.indexOf(playerInfo.activeCategory) >= 0) {
			return "artisan";
		} else {
			return false
		}
	}

	runGatheringSkill = () => {
		// console.log(" run skill ")
		let resource;
		switch (this.state.activeCategory) {
			case "fishing":
				resource = `raw ${this.state.activeTask}`;
				break;
			case "mining":
				resource = `${this.state.activeTask} ore`;
				break;
			case "woodcutting":
				resource = `${this.state.activeTask} log`;
				break;
			case "hunting":
				resource = huntingResources(this.state.activeTask);
				break;
			default:
				break;
		}

		if(randomChance(this.state.taskChance)){
			playerSkills[this.state.activeCategory].experience += playerInfo.expRate;
			playerStorage[resource]++;

			this.setState({
				ranNum : Math.random()
			})
		} else {
			if(randomChance(this.state.depleteChance)) {
				setTimeout(function(){},this.state.respawnRate);
			}
		}
	}

	runArtisanSkill() {
		let enoughResources = false;
		for(let i = 0; i < playerInfo.requires.length; i++){
			if(playerInfo.requires[i][1] > playerStorage[playerInfo.requires[i][0]]) {
				enoughResources = false;
				break;
			} else {
				enoughResources = true;
			}
		}

		if(enoughResources){
			for(let i = 0; i < playerInfo.requires.length; i++){
				playerStorage[playerInfo.requires[i][0]]-= playerInfo.requires[i][1];
			}
			playerSkills[playerInfo.activeCategory].experience += playerInfo.expRate;
			playerStorage[playerInfo.activeTask]++;
		}
		
	}

	render () {
		return (
			<div className="App">
				<MainNav />
				<MainContent 
					updateTask={this.updateTask} 
					logStatus={this.state.logStatus} 
					newPlayer={this.createNewPlayer}
					userLogIn={this.userLogIn}
					userLogOut={this.userLogOut}	
				/>
				
			</div>
		)	
	}
}