var mysql=require("mysql");
var con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"password",
	database:"shubh"
});

con.connect(function(err){
if(err)
	throw err;
else
	console.log("Database connected");
});
module.exports=con;
