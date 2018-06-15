var mysql=require("mysql");
var con2=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"password",
	database:"shubh"
});

con2.connect(function(err){
if(err)
	throw err;
else
	console.log("Database connected");
});
module.exports=con2;
