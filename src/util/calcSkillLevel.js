import playerSkills from '../playerData/playerSkills';

function calcSkillLevel(skill) {
	for(const currentSkill in playerSkills) {
		// console.log(currentSkill, playerSkills[currentSkill]);
		if(currentSkill === skill){
			return (
					Math.floor((1 + Math.sqrt(1 + 7 * playerSkills[currentSkill].experience / 50) / 18.8)
				));
		}
	}
}

export default calcSkillLevel;