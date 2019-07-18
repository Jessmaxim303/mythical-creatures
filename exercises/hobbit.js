class Hobbit {
	constructor(name) {
		this.name = name;
		this.disposition = 'homebody';
		this.age = 0;
		this.adult = false;
		this.isShort = true;
		this.old = false;
		this.hasRing = this.checkNames() || false;
	}
	celebrateBirthday() {
		this.age++; 
		if (this.age > 32) {
			this.adult = true
		}
		if (this.age > 100) {
			this.old = true;
		}
}
    checkNames() {
    	if(this.name === 'Frodo') {
    		return true
    	} 
    }
}


module.exports = Hobbit;























