import React from 'react';
import { Link } from 'react-router-dom';

import skillCategories from '../../gameData/skillCategories.js';
import calcSkillLevel from '../../util/calcSkillLevel';

import './Artisan.min.css';

export default function Artisan () {
	return (
		<section className="Artisan">
			<section className="skillMenu">
				{
					JSON.parse(JSON.stringify(skillCategories.artisanSkills)).map((skill) => {
						return (
							<Link to={`artisan/${skill}`} key={`artisan-${skill}`} className={skill}>{skill} <span aria-label="level">level {calcSkillLevel(skill)}</span></Link>
						)
					})
				}
			</section>
		</section>
		
	)
}