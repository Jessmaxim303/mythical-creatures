class Medusa {
	constructor(name) {
		this.name = name;
		this.statues = [];
	}
	stare(victim) {
        console.log(victim.name);
		if (this.statues.length > 2) { 
       	this.statues.shift();
       }

        if (this.statues.length < 3) {
    	this.statues.push(victim);
       }

       victim.stoned = true;
      
    }
   };




// npm test mythical-creatures/test/medusa-test.js

module.exports = Medusa;

