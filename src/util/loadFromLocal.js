import playerInfo from '../playerData/playerInfo';
import playerSkills from '../playerData/playerSkills';
import playerStorage from '../playerData/playerStorage';

function loadFromLocal () {
	let info = JSON.parse(localStorage.getItem("info"));
	let skills = JSON.parse(localStorage.getItem("skills"));
	let storage = JSON.parse(localStorage.getItem("storage"));

	console.log(info, skills, storage);

	Object.assign(playerInfo, info);
	Object.assign(playerSkills, skills);
	Object.assign(playerStorage, storage);
}
export default loadFromLocal;