import React from 'react';

import playerInfo from '../../playerData/playerInfo';
import playerSkills from '../../playerData/playerSkills';
import calcSkillLevel from '../../util/calcSkillLevel';
import './Player.min.css';

export default function Player (props) {
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
			<h4 className="totalLevel">
				Total Level: 
			</h4>
			<section className="skillsList">
				
			</section>
		</section>
	)
}