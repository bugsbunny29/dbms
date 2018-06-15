var express=require("express");
var router=express.Router();
var con=require(".././config.js");

router.get('/home',function(req,res){
 console.log(req.session.username);
 if(req.session==null)
 res.render('music',{user:null});
 else
  res.render('music',{user:req.session.user,username:req.session.username});
});

router.get('/signUp',function(req,res){
	res.render('registration');
});
router.post('/signUp',function(req,res){

	var user={
		name:req.body.name,
		age:req.body.age,
		email:req.body.email,
		password:req.body.password,
    username:req.body.username
	};
	con.query("Insert into users Set ?",user,function(err,result){
		if(err)
			throw err;
		 res.redirect("/home");
	});
});
router.get('/login',function(req,res){
	res.render('login');

});
router.post('/login',function(req,res){
    var sess=req.session;

 var email=req.body.email;
var password=req.body.password;
console.log(email+" "+ password);
con.query("Select * from users where email=?",[email],function(err,result,fields){
	if(err)
		throw err;
   else if(result.length>0)
   {
     
     if(result[0].password==password)
     {
     	req.session.username=result[0].username;
      req.session.userid=result[0].id;
     	req.session.user=result[0];
      res.redirect('/home');
     }
     else
     {
     	     	console.log("Incorrect password");

     	res.redirect('/signUp');
     }

   }
    else
     {
     	     	console.log("No email");

     	res.redirect('/signUp');
     }
});

});

router.get('/sub/:plan',function(req,res){
  var plan=req.params.plan;
  console.log(plan);
  var user=req.session.user;
  if(user){
  var name=req.session.username;
  con.query("select * from users where username=?",[name],function(err,result){
    res.render('payment',{user:user,username:name,data:result,plan:plan});
  })
  }
  else res.redirect('/login');
});




router.post('/sub',function(req,res){
  var type=req.body.subtype;
  console.log(type+"HEY");
  var userid=req.session.userid;
  con.query("insert into sub(id,sub_type) values("+userid+",'"+type+"')",function(err,result){
    res.redirect('/home');
  })
})



router.get('/logout',function(req,res){

  req.session.destroy(function(err){
   if(err)
   	throw err;
   res.redirect('/home');
  });
});

router.get('/subscribtion',function(req,res){
    res.render('subscribtion',{user:req.session.user,username:req.session.username});

});
router.get('/aboutUs',function(req,res){
    res.render('AboutUs');
});

router.post('/search',function(req,res){
 // console.log(req.body.song);

  var data=req.body.data;
  console.log(data);
    con.query("select * from songs NATURAL JOIN artists where song_name LIKE('%"+data+"%')",function(err,result){
      console.log(result);
      if(err)
       throw err;
        res.render('searchSongs',{data:result,user:req.session.user,username:req.session.username});
    });
})


 router.get('/fav',function(req,res){
   var id=req.session.userid;
   con.query("select * from songs natural join artists natural join fav natural join users where id="+id,function(err,result){
    if(err)
      throw err;
    res.render('fav',{data:result,user:req.session.user,username:req.session.username});
   })
 })

router.get('/addFav/:route/:name/:song_id',function(req,res){
  var song_id=req.params.song_id;
  var name=req.params.name;
  var route=req.params.route;
  var id=req.session.userid;
  console.log(route+" "+name);
  con.query("insert into fav values("+id+","+song_id+")",function(err,result){
    if(err)
    throw err;
    res.redirect(`/info/${route}/${name}`);
  });
});


router.get('/edit',function(req,res){
  if(req.session.user){
var id=req.session.userid;
console.log(id);
con.query("Select * from users where id=?",[id],function(err,result){
res.render('edit',{data:result,user:req.session.user,username:req.session.username,userid:id});

});

}
else{
  res.redirect('/login');
}
});
router.post('/edit/:id',function(req,res){
var id=req.params.id;
  var user={
 name:req.body.name,
 age:req.body.age,
 email:req.body.email,
 username:req.body.username,
 password:req.body.password
}

con.query("Update users set ? where id=?",[user,id],function(err,result){
  if(err)
    throw err;
  res.redirect('/edit')
});
});
router.get('/delete/:id',function(req,res){
var id=req.params.id;
  console.log(id);
var userid=req.session.userid;
con.query("Delete from fav where song_id=? and id=?",[id,userid],function(err,result){
  if(err)
    throw err;
  res.redirect('/fav');
})
});
module.exports=router;
