class Vampire {
	constructor(name, pet='bat') {
		this.name = name;
		this.thirsty = true;
		this.drank = 0;
	}
	drink() {
		this.drank++
		this.thirsty = this.drank < 1;
	}
};




module.exports = Vampire;

