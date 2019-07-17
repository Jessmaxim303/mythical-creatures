class Werewolf {
	constructor(name, location) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
        this.hungry = false;
        }
        change() {
        	this.human = !this.human;
        	this.wolf = !this.wolf;
        	if (this.wolf === true) {
        	   this.hungry = true;
        	} else if (this.human === true) {
                this.hungry = false;
            }

            
        }

        eat(victim) {
               if (this.human === true) {
               return
               } 
               if(this.hungry === true) {
                this.hungry = false;
                this.human = true;
                this.wolf = false;
                victim.alive = false;
               }
       } 
  
};

// class Victim {
//         constructor() {

//         }
// }

module.exports = Werewolf;





















// class Werewolf {
//   constructor (name, location) {
//     this.name = name;
//     this.location = location;
//     this.human = true;
//     this.wolf = false;
//     this.hungry = false;
//   }
//   change(){
//     this.human = !this.human;
//     this.wolf = !this.wolf;
//     this.hungry = !this.hungry;
//   }
//   eat(victim) {
//     if (!this.human){
//       victim.alive = false;
//       this.change();
//     } 
//     }
//   } 