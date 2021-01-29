function randomChance(chance) {
	if(Math.random() < chance) {
		return true;
	} else {
		return false;
	}
}

export default randomChance;