import React from 'react';
import './Gathering.min.css';

import FishingData from '../../gameData/taskData/fishingData';
import playerStorage from '../../playerData/playerStorage';

import updateTask from '../../util/updateTask';

export default function Fishing (props) {
	return (
		<section className="Fishing Gathering">
			FISH
			<section className="taskList">
				{
				FishingData.map( fish => {

					return (
						<label key={`fishList${fish.name}`} className="fishing task" onClick={() => updateTask(fish.name, fish.skill)}>
							<p className="taskCategory">Fish<br />
								<span className="taskName">{fish.name}</span>
							</p>
							<img src="#" alt="fish" />
							<input type="radio" name="currentTask"/>
							<p className="taskInfo">
								{fish.experience}xp | lvl {fish.minLevel}
							</p>
							<p className="ownedResource">
								owned: {playerStorage[`raw `+fish.name]}
							</p>
							
						</label>
					)
				})}
			</section>
		</section>
	)
}