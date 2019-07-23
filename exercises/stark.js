class Stark {
	constructor(name, location, safe) {
		this.name = name;
		this.location = location || 'Winterfell';
		this.safe = false;
	}
	houseWords(){
		var words = this.safe ? 'The North Remembers' : 'Winter is Coming'
		return words
	}
}

module.exports = Stark;