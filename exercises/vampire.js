
class Vampire {
	constructor(name, pet) {
		this.name = name;
		this.thirsty = true;

	   if (pet === undefined) {
       this.pet = 'bat';
       } else {
       this.pet = pet;
    }
   }
   
}






module.exports = Vampire;

// npm test mythical-creatures/test/vampire-test.js































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
