import playerSkills from '../playerData/playerSkills';

function calcSkillLevel(skill) {

	let xp = 0;

	for(const currentSkill in playerSkills) {
		if(currentSkill === skill){
				xp =  playerSkills[currentSkill].experience;
		}
	}

	const equate = function(xp){
        return Math.floor(xp + 2375 * Math.pow(2, xp / 7));
    };
 
    const level_to_xp = function(level){ 
        for (var i = 1; i < level; i++)
            xp += equate(i);
 
        return Math.floor(xp / 4);
    };
 
    const xp_to_level = function(xp){
        var level = 1;
 
        while (level_to_xp(level) < xp)
            level++;
 
        return level;
	};
	
	return xp_to_level(xp);
}

export default calcSkillLevel;