class Direwolf {
	constructor(name, home, size) {
		this.name = name;
		this.starksToProtect = [];
		this.home = home || 'Beyond the Wall';
		this.size = size || 'Massive';
		this.huntsWhiteWalkers = true;
}
    protect(stark) {
    	// const locationMatch = (home, location) => home === location;
    	if (this.home === stark.location && this.starksToProtect.length < 2){
    	this.starksToProtect.push(stark);
    	stark.safe = true;
    	this.huntsWhiteWalkers = false;
      }
    }
    leave(stark) {
    	this.starksToProtect.pop(stark);
        stark.safe = false;
    }
};


module.exports = Direwolf;

// npm test mythical-creatures/test/direwolf-test.js