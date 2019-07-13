class Wizard {
	constructor(object) {
		this.name = object.name;
		this.bearded = true;
		this.isRested = true;
		this.castSpells = 0;

		if (object.bearded !== undefined) {
			this.bearded = object.bearded;
		}
}
		incantation(spells) {
			return spells.toUpperCase();
		}

		cast(castSpells) {
			 this.castSpells++
    if(this.castSpells >= 3){
      this.isRested = false;
      return "I SHALL NOT CAST!";
    }else{
      return "MAGIC BULLET";
    } 
  }

    		
};

module.exports = Wizard;


// npm test mythical-creatures/test/wizard-test.js




// if (job === undefined) {
// 			return this.job = 'Scallywag';
// 		} else {
// 			this.job = job;
// 		}
// 	}