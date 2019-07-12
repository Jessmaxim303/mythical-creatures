class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }

  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  } 

  says(message) {
    return `**;* ${message} *;**`;
  }

}

module.exports = Unicorn;


// npm test mythical-creatures/test/unicorn-test.js

// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass

// class Unicorn {
//   constructor(name, color) {
//     this.name = name;
//     if (color === undefined) {
//       this.color = 'white';
//     } else {
//       this.color = color;
//     }
//   }

// isWhite() {
//   // console.log('hello');
//   if (this.color !== 'white') {
//     return false;
//   }
//   }

//   says(message) {
//   return `**;* ${message} *;**`;
//   }
// }

