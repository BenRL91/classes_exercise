export class Human {
	constructor(qualities = {}){
		if (qualities.cool === undefined){this.cool = false
		}else {this.cool = qualities.cool};
	}
		pet(dog){
			dog.status = "happy";
		}
		feed(dog){
			dog.hungry = false;
		}
  }