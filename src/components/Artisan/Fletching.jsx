import React from 'react';
import FutureContent from '../FutureContent/FutureContent'

import fletchingData from '../../gameData/taskData/fletchingData';
import playerStorage from '../../playerData/playerStorage'

import updateTask from '../../util/updateTask';

export default function Fletching () {
	return (
		<section className="Fletching Artisan">
			<section className="taskList">
				{
					fletchingData.map( fletch => {
						return (
							<label key={`fletchList${fletch.name}`} className="fletching task">
								<p className="taskCategory">Fletch<br />
									<span className="taskName">{fletch.name}</span>
								</p>
								<img src="" alt="fletch" />
								<input type="radio" name="currentTask" onClick={() => updateTask(fletch.name, fletch.skill)}/>
								<p className="taskInfo">
									{fletch.experience}xp | lvl {fletch.minLevel}
								</p>
								<p className="ownedResource">
									owned: {playerStorage[fletch.name]}
									
								</p>
								
							</label>
						)
					})
				}
			</section>
		</section>
	)
}