class Vampire {
	constructor(name, pet='bat') {
		this.name = name;
		this.thirsty = true;
		this.drank = 0;
		// if (pet === undefined) {
		// 	this.pet = 'bat';
		// } else {
		// 	this.pet = pet;
		// }
	}
	drink() {
		this.drank++
		this.thirsty = this.drank < 1;
	}
};




module.exports = Vampire;

// npm test mythical-creatures/test/vampire-test.js





























// class Vampire {
// 	constructor(name, pet) {
// 		this.name = name;
// 		this.thirsty = true;

// 	   if (pet === undefined) {
//        this.pet = 'bat';
//        } else {
//        this.pet = pet;
//     }
//    }
   
// }

// ____

// class Vampire {
//  constructor (name, pet) {
//    this.name = name;
//    if (pet === undefined) {
//      this.pet = 'bat';
//     } else {
//      this.pet = pet;
//     }
//     this.thirsty = true;
//   }
//   drink() {
//    this.thirsty = false;
//   }

// }

