//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require("../data/friends");

module.exports = function(app,path,express,bodyParser){

	app.get("/api/friends",function(req, res){
		return res.json(friends);
	});

	app.post("/api/friends",function(req, res){
		var match;
	    var input = req.body;
		//input.routeName = input.name.replace(/\s+/g, "").toLowerCase();
		for(i=0;i<input.scores.length;i++){
			input.scores[i] = parseInt(input.scores[i]);
		}
		console.log(input);
		
		var current = 9999;
		for(i=0;i<friends.length;i++){
			var val = 0;
			for(j=0;j<input.scores.length;j++){
				console.log(friends[i].scores[j]);
				val += Math.abs(input.scores[j] - friends[i].scores[j]);
			};
			if (val < current){
				current = val;
				match = friends[i];
			};
		};
		res.json(match);
		console.log(match);
		friends.push(input);
		res.end("SENT.");
	});

	// app.get("/api/match",function(req, res){
	// 	return res.json(match);
	// });

}