import React from 'react';

import huntingData from '../../gameData/taskData/huntingData';
import playerStorage from '../../playerData/playerStorage';

import updateTask from '../../util/updateTask';
import huntingResources from '../../util/huntingResources';

export default function Hunting (props) {
	return (
		<section className="Hunting Gathering">
			<section className="taskList">
				{
				huntingData.map( creature => {
					let resource = huntingResources(creature.name);
					return (
						<label key={`creatureList${creature.name}`} className="hunting task" >
							<p className="taskCategory">Hunt<br />
								<span className="taskName">{creature.name}</span>
							</p>
							<img src="#" alt="fish" />
							<input type="radio" name="currentTask" onClick={() => updateTask(creature.name, creature.skill)}/>
							<p className="taskInfo">
								{creature.experience}xp | lvl {creature.minLevel}
							</p>
							<p className="ownedResource">
								owned: {playerStorage[resource]}
							</p>
							
						</label>
					)
				})}
			</section>
		</section>
	)
}