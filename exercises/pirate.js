class Pirate {
	constructor(name, job) {
		this.name = name; 
		this.cursed = false;
		this.heinousActs = 0;
		this.booty = 0;

		if (job === undefined) {
			return this.job = 'Scallywag';
		} else {
			this.job = job;
		}
	}
		commitHeinousAct() {
    	this.heinousActs++;
    	if (this.heinousActs > 2) {
            this.cursed = true;
    	}
     }
      
        robShip() {
        	this.booty = 100;
        	return "YAARRR!"
        }

};


module.exports = Pirate;

// npm test mythical-creatures/test/pirate-test.js