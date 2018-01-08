var friends = require("./app/data/friends");
console.log(
friends.map(f => 
				f.scores.reduce(
					(t,c,i) => t + Math.abs(c-5), 0)
				)
);