class Fairy {
	constructor(name, clothes){
		this.name = name;
		this.dust = 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
		this.humanWards = [];
	}
	receiveBelief() {
		this.dust++;
	}
	believe() {
		this.dust += 10;
	}
	makeDresses(flowers) {
		this.clothes.dresses = this.clothes.dresses.concat(flowers);
	}
	provoke() {
		this.disposition = 'Vengeful';
	}
	replaceInfant(infants) {
		if (this.disposition === 'Vengeful'){
    infants.disposition = 'Malicious';
    this.humanWards.push(infants);
    }
    if (this.humanWards.length >2) {
      this.disposition = 'Good natured';
    }
    return infants;
  }

	

};

module.exports = Fairy;
