var express=require("express");
var app=express();
app.set('view engine','ejs');
app.use(express.static('public'));
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var user=require('./routes/user');
var info=require('./routes/info');
var create=require('./routes/create');

var session=require("express-session");
var cookieParser=require("cookie-parser");
var MysqlStore=require("express-mysql-session")(session);
 
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'shubh'
};
var sessionStore = new MysqlStore(options);

app.use(session({
	secret:"Kritiramps",
	resave:false,
	saveUnitialized:false,
	store:sessionStore
}));

app.use('/',user);
app.use('/info',info);
app.use('/create',create);

app.listen(3000,function(err){
	if(err)
		throw err;
	console.log("Listening to 3000");

});
