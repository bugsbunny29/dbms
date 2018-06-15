var con=require('.././config');
var express=require("express");
var router=express.Router();
router.get("/",function(req,res){
	console.log("get");
 res.render('insert');
});
router.post("/",function(req,res){
	console.log("post");
       var user={
         song_name:req.body.song_name,
         artist_id:req.body.artist_id,
         star:req.body.star,
         movie:req.body.movie,
         year:req.body.year,
         genre:req.body.genre,
         duration:req.body.duration,
         likes:req.body.likes
       };
       con.query("Insert into songs Set ?",user,function(err,result){
        
        if(err)
        	throw err;
        res.redirect("/create");
       });

});
module.exports=router;