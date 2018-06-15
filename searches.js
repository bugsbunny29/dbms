var express=require('express')
var app=express();

var con=require('./config.js')

app.set('view engine','ejs');
app.use(express.static('public'));
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/s',function(req,res){
	res.render('searches');
})

app.post('/s',function(req,res){
	var data=req.body.song;
    con.query("select * from songs NATURAL JOIN artists where song_name LIKE('%"+data+"%')",function(err,result){
    	if(err) throw err;
    	else 
    		res.render('searchSongs',{data:result,user:null});
    });
})

app.listen(3000);