export class Human {
	constructor(qualities = {}){
		this.pet = function(dog){
			dog.status = "happy";
		}
		this.feed = function(dog){
			dog.hungry = false;
		}
		if (qualities.cool === undefined){this.cool = false
		}else {this.cool = qualities.cool};
	}
  }