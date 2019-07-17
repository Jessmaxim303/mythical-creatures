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


// npm test mythical-creatures/test/hobbit-test.js

// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass






















