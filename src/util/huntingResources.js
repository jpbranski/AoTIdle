let huntingAnimal = [
	"common rabbit",
	"pheasant",
	"snowshoe hare",
	"turkey",
	"imp",
	"red fox",
	"wicked crow",
	"ravenous coyote",
	"silver fox",
	"molten chicken",
	"great wolf",
	"gryphon",
	"shadow imp",
	"ashen coyote",
	"dwarf dragon",
	"star wolf",
	"solar gryphon"
];

let huntingResource = [
	"rabbit pelt",
	"feather",
	"snowshoe pelt",
	"large feather",
	"imp horn",
	"fox fur",
	"cursed feather",
	"tough pelt",
	"silver fur",
	"flaming feather",
	"great wolf fur",
	"gryphon talon",
	"shadow imp horn",
	"ashen pelt",
	"dragonhide",
	"galactic pelt",
	"solar talon"
];

function huntingResources(creature) {
	let res = "";
	for(let i = 0; i < huntingResource.length; i++) {
		if(huntingAnimal[i] === creature) {
			res = huntingResource[i];
		}
	}	

	return res;
}

export default huntingResources;