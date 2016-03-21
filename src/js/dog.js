export class Dog {
	constructor(qualities = {}) {
		this.status = "normal";
		this.color = qualities.color;
		if (qualities.hungry === undefined){this.hungry = true;
		}else{this.hungry = qualities.hungry;}
		this.owner = undefined;
		console.log(this)
  };
};

// var DEFAULT_STATUS = "normal";
// var DEFAULT_COLOR = undefined;
// var DEFAULT_HUNGRY = true;
// var DEFAULT_OWNER = undefined;

// export class Dog {
// 	constructor(qualities = {}) {
// 		this.qualities = Object.assign({
// 			status: DEFAULT_STATUS,
// 			color: DEFAULT_COLOR,
// 			hungry: DEFAULT_HUNGRY,
// 			owner: DEFAULT_OWNER
// 		}, qualities);
// 		console.log(this.qualities)
//   };
// };

// I’m getting all of the correct Dogs created with the second class
// as far as I can tell. 
// But when their qualities are tested the answers are not passing.