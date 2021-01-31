import React from 'react';
import './Gathering.min.css';

import woodcuttingData from '../../gameData/taskData/woodcuttingData';
import playerStorage from '../../playerData/playerStorage';

import updateTask from '../../util/updateTask';

export default function Woodcutting (props) {
	return (
		<section className="Woodcutting Gathering">
			<section className="taskList">
				{
					woodcuttingData.map( tree => {

						return (
							<label key={`treeList${tree.name}`} className="woodcutting task">
								<p className="taskCategory">Cut<br />
									<span className="taskName">{tree.name}</span>
								</p>
								<img src="#" alt="tree" />
								<input type="radio" name="currentTask" onClick={() => updateTask(tree.name, tree.skill)}/>
								<p className="taskInfo">
									{tree.experience}xp | lvl {tree.minLevel}
								</p>
								<p className="ownedResource">
									owned: {playerStorage[tree.name + " log"]}
									
								</p>
								
							</label>
					)})
				}
			</section>
		</section>
	)
}