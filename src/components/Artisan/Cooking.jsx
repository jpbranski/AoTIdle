import React from 'react';

import cookingData from '../../gameData/taskData/cookingData';
import playerStorage from '../../playerData/playerStorage'

import updateTask from '../../util/updateTask';

export default function Cooking () {
	return (
		<section className="Cooking Artisan">
			<section className="taskList">
				{
					cookingData.map( food => {
						return (
							<label key={`foodList${food.name}`} className="cooking task">
								<p className="taskCategory">Cook<br />
									<span className="taskName">{food.name}</span>
								</p>
								<img src="/img/fish-cooked2.png" alt="fish" />
								<input type="radio" name="currentTask" onClick={() => updateTask(food.name, food.skill)}/>
								<p className="taskInfo">
									{food.experience}xp | lvl {food.minLevel}
								</p>
								<p className="ownedResource">
									owned: {playerStorage[food.name]}
									
								</p>
								
							</label>
					)})
				}
			</section>
		</section>
	)
}