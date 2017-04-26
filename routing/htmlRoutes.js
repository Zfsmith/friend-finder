//A GET Route to /survey which should display the survey page.
//A default USE route that leads to home.html which displays the home page.

var friends = require("../data/friends");

module.exports = function(app,path,express,bodyParser){

	app.get("/",function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"))
	});

	app.get("/survey",function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"))
	});

	

}