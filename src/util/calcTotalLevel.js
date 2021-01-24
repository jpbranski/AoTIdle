import calcSkillLevel from './calcSkillLevel';
import playerSkills from '../playerData/playerSkills';
import playerInfo from '../playerData/playerInfo';

function calcTotalLevel () {
	let totalLevel = 0;

	for(let skill in playerSkills) {
		totalLevel += calcSkillLevel(skill);
	}

	playerInfo.totalLevel = totalLevel;
}

export default calcTotalLevel;