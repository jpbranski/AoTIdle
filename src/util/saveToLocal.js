import playerInfo from '../playerData/playerInfo';
import playerSkills from '../playerData/playerSkills';
import playerStorage from '../playerData/playerStorage';

function saveToLocal () {
	let info = JSON.stringify(playerInfo);
	let skills = JSON.stringify(playerSkills);
	let storage = JSON.stringify(playerStorage);

	localStorage.setItem("info", info);
	localStorage.setItem("skills", skills);
	localStorage.setItem("storage", storage);
}

export default saveToLocal;