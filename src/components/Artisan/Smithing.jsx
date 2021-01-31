import React from 'react';

import smithingData from '../../gameData/taskData/smithingData';
import playerStorage from '../../playerData/playerStorage'

import updateTask from '../../util/updateTask';

export default function Smithing () {
	return (
		<section className="Smithing Artisan">
			<section className="taskList">
				{
					smithingData.map( item => {
						return (
							<label key={`smithList${item.name}`} className="smithing task">
								<p className="taskCategory">Smelt<br />
									<span className="taskName">{item.name}</span>
								</p>
								<img src="" alt="item" />
								<input type="radio" name="currentTask" onClick={() => updateTask(item.name, item.skill)}/>
								<p className="taskInfo">
									{item.experience}xp | lvl {item.minLevel}
								</p>
								<p className="ownedResource">
									owned: {playerStorage[item.name]}
									
								</p>
								
							</label>
					)})
				}
			</section>
		</section>
	)
}