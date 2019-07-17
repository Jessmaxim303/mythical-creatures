class Werewolf {
	constructor(name, location) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
	}
        change() {
        	if (this.human === false) {
        		this.human = true;
        		this.wolf = false;
        	} else if 
        	 (this.wolf === false) {
        		this.wolf = true;
        		this.human = false;
        	}
        }
}

module.exports = Werewolf;