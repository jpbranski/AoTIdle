import React from 'react';
import { Link } from 'react-router-dom';

import skillCategories from '../../gameData/skillCategories.js';
import calcSkillLevel from '../../util/calcSkillLevel';

import './Gathering.min.css';

export default function Gathering () {

	return (
		
		<section className="Gathering">
			<section className="skillMenu">
			{JSON.parse(JSON.stringify(skillCategories.gatheringSkills)).map((skill) => {
				return (
					<Link to={`gathering/${skill}`} key={`gathering-${skill}`} className={skill}>{skill} <span aria-label="level">level {calcSkillLevel(skill)}</span></Link>
				)
			})}
			</section>
		</section>
	)
}