class Dragon {
    constructor(name, rider, color) {
        this.name = name;
        this.rider = rider;
        this.color = color;
        this.hungry = true;
        this.timesEaten = 0;
    }
    eat() {
        this.timesEaten++;
        this.hungry = this.timesEaten < 3;
    } 
}
     



module.exports = Dragon;


// npm test mythical-creatures/test/dragon-test.js

// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass





















// class Dragon {
//  constructor(name, rider, color) {
//      this.name = name;
//      this.rider = rider;
//      this.color = color;
//      this.hungry = true;
//      this.timesEaten = 0;
//  }
        
//     eat() {
//          this.timesEaten++;
//          this.hungry = this.timesEaten < 3; 
//         }
    
    // eat() {
    //  this.timesEaton++;
    //  if (timesEaten < 3) {
    //         this.hungry = false;
    //  }
    
    // }
 


// class Dragon {
// 	constructor(name, rider, color) {
// 		this.name = name;
// 		this.rider = rider;
// 		this.color = color;
// 		this.hungry = true;
// 		this.timesEaten = 0;
// }
//      eat() {
//      	this.timesEaten ++;
//      	this.hungry = this.timesEaten < 3;
//      	}
// }