import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import skillCategories from '../../gameData/skillCategories.js';
import calcSkillLevel from '../../util/calcSkillLevel';

export default function Gathering () {

	useEffect(() => {
		document.title = "Gathering";
	})

	return (
		
		<section className="Gathering">
			{JSON.parse(JSON.stringify(skillCategories.gatheringSkills)).map((skill) => {
				return (
					<Link to={`gathering/${skill}`} key={`gathering-${skill}`}>{skill} <sup>{calcSkillLevel(skill)}</sup>&#8260;<sub>100</sub></Link>
				)
			})}
		</section>
	)
}