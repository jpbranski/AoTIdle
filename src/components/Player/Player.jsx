import React from 'react';

import playerInfo from '../../playerData/playerInfo';
import playerSkills from '../../playerData/playerSkills';
import calcSkillLevel from '../../util/calcSkillLevel';
import './Player.min.css';

export default function Player (props) {
	let skillArray = [];
	Object.entries(playerSkills).forEach(([key]) => {
		skillArray.push([key, calcSkillLevel(key)])
	})
	return (
		<section className="Player">
			<h3>{playerInfo.name}</h3>
			<div className="currentStats">
				<p>
					Health:<br />
					{playerInfo.currentHealth} / {calcSkillLevel(playerSkills.health) * 100}
				</p>
				<p>
					Gold:<br />
					{playerInfo.gold}
				</p>
			</div>
			<h4 className="skillLevel">
				Skills
			</h4>
			<ul>
				{
					skillArray.map((skill) => {
						return (
							<li className={skill[0]} key={skill}>
								<p>{skill[0]}</p>
								{skill[1]}/100
							</li>
						)
					})
				}
			</ul>
		</section>
	)
}