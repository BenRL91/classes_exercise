export class Dog {
	constructor(qualities = {}) {
		var status
		this.status = "normal";
		this.color = qualities.color;
		if (qualities.hungry === undefined){this.hungry = true;
		}else{this.hungry = qualities.hungry;}
		this.owner = undefined;
  };
};