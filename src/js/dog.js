// export class Dog {
// 	constructor(qualities = {}) {
// 		this.status = "normal";
// 		this.color = qualities.color;
// 		if (qualities.hungry === undefined){this.hungry = true;
// 		}else{this.hungry = qualities.hungry;}
// 		this.owner = undefined;
//   };
// };

var DEFAULT_STATUS = "normal";
var DEFAULT_COLOR = undefined;
var DEFAULT_HUNGRY = true;
var DEFAULT_OWNER = undefined;

export class Dog {
	constructor(qualities = {}) {
		this.qualities = Object.assign({
			status: DEFAULT_STATUS,
			color: DEFAULT_COLOR,
			hungry: DEFAULT_HUNGRY,
			owner: DEFAULT_OWNER
		}, qualities);

		var {status, color, hungry, owner} = this.qualities;
		this.status = status;
		this.color = color;
		this.hungry = hungry;
		this.owner = owner;
  };
};