var friends = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", (req, res) => res.json(friends));

	app.post("/api/friends",  (req, res) => {

		let diffs = [];
		friends.forEach(f => 
			diffs.push(f.scores.reduce((t,s,i) => 
				t + Math.abs(parseInt(s) - parseInt(req.body.scores[i])), 0)));

		//friends.push(req.body);

		res.json(friends[diffs.indexOf(Math.min(...diffs))]);
	});

}