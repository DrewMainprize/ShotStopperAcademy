var express				= require("express"), //Includes express
	app 				= express(), // Create express app
    bodyParser 			= require("body-parser"),
	expressSanitizer 	= require("express-sanitizer");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());


//============== ROUTES ==============

//Landing
app.get("/", function(req, res){
    res.render("landing");
});


//Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("JustinAmmar running on port ${ PORT }");
});