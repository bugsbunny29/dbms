var express=require('express');
var router=express.Router();
var con=require(".././config.js");
var con2=require(".././config2.js");

router.get('/artist/:id',function(req,res){
	var id =req.params.id;
	console.log(id);
	con.query("Select song_id,song_name,artist_name,year,duration from songs natural join artists where artist_id =?",[id],function(err,result,field){
		  
       if(err)
       	throw err;
       if(id=="as"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/arijit.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else if(id=="ts"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/taylor swift.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else if(id=="aa"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/atif.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else if(id=="cp"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/charlie.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else  if(id=="ar"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/ar-rahman.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else if(id=="as"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/arijit.jpg",data:result,user:req.session.user,username:req.session.username});
       }

     
	});
 

});
 router.get('/sort/artist/:id/:name',function(req,res){
    var id=req.params.id;
      var val=req.params.name;
     console.log(id+" "+val);
     
    /*con.query("Select song_name,artist_name,year ,duration from songs natural join artists where artist_id = ? order by ? desc",[id,val],function(err,result,field){*/
      con.query("Select song_id,song_name,artist_name,year,duration from songs natural join artists where artist_id ="+"'"+id+"'"+" order by "+val+" desc",function(err,result){
        if(err)
        throw err;
      console.log(result);
       if(id=="as"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/arijit.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else if(id=="ts"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/taylor swift.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else if(id=="aa"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/atif.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else if(id=="cp"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/charlie.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else  if(id=="ar"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/ar-rahman.jpg",data:result,user:req.session.user,username:req.session.username});
       }
       else if(id=="as"){
       res.render('info',{id:id,route:"artist",title:result[0].artist_name,img:"/images/arijit.jpg",data:result,user:req.session.user,username:req.session.username});
       }
     });

});



router.get('/movie/:name',function(req,res){
  var name=req.params.name;
  console.log(name);
  con.query("Select song_id,song_name,movie,year,duration from songs natural join artists where movie=?",[name],function(err,result,field){
    if(err)
      throw err;
   if(name=="Badrinath Ki Dulhaniya")
          res.render('info',{id:name,route:"movie",title:result[0].movie,img:"http://a10.gaanacdn.com/images/song/39/21236239/crop_480x480_1516001052.jpg",data:result,user:req.session.user,username:req.session.username});
   else if(name=="Tamasha")
    res.render('info',{id:name,route:"movie",title:result[0].movie,img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Tamasha_%28film_poster%29.jpg/220px-Tamasha_%28film_poster%29.jpg",data:result,user:req.session.user,username:req.session.username});
  else if(name=="Aashiqui2")
    res.render('info',{id:name,route:"movie",title:result[0].movie,img:"http://content.hungama.com/audio%20album/display%20image/300x300%20jpeg/63861609.jpg" ,data:result,user:req.session.user,username:req.session.username})  
   else if(name=="Ae Dil Hai Mushkil")
    res.render('info',{id:name,route:"movie",title:result[0].movie,img:"https://i.ytimg.com/vi/GdNKsW-E_po/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
   else if(name=="Raees")
    res.render('info',{id:name,route:"movie",title:result[0].movie,img:"https://pbs.twimg.com/media/DVUxrk4UQAASDEW.jpg",data:result,user:req.session.user,username:req.session.username});

  });

});
router.get('/sort/movie/:moviename/:name',function(req,res){
      var val=req.params.name;
      var moviename=req.params.moviename;
      con.query("Select * from songs natural join artists where movie=? order by +"+val+" desc",[moviename],function(err,result){
         if(err)
      throw err;
   if(moviename=="Badrinath Ki Dulhaniya")
          res.render('info',{id:moviename,route:"movie",title:result[0].movie,img:"http://a10.gaanacdn.com/images/song/39/21236239/crop_480x480_1516001052.jpg",data:result,user:req.session.user,username:req.session.username});
   else if(moviename=="Tamasha")
    res.render('info',{id:moviename,route:"movie",title:result[0].movie,img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Tamasha_%28film_poster%29.jpg/220px-Tamasha_%28film_poster%29.jpg",data:result,user:req.session.user,username:req.session.username});
  else if(moviename=="Aashiqui2")
    res.render('info',{id:moviename,route:"movie",title:result[0].movie,img:"http://content.hungama.com/audio%20album/display%20image/300x300%20jpeg/63861609.jpg" ,data:result,user:req.session.user,username:req.session.username})  
   else if(moviename=="Ae Dil Hai Mushkil")
    res.render('info',{id:moviename,route:"movie",title:result[0].movie,img:"https://i.ytimg.com/vi/GdNKsW-E_po/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
   else if(moviename=="Raees")
    res.render('info',{id:moviename,route:"movie",title:result[0].movie,img:"https://pbs.twimg.com/media/DVUxrk4UQAASDEW.jpg",data:result,user:req.session.user,username:req.session.username});


      });
      
});


router.get('/star/:name',function(req,res){
  var name=req.params.name;
  console.log(name);
  con.query("Select song_id,song_name,star,year,duration from songs natural join artists where star=?",[name],function(err,result,field){
    if(req.session.user){
        var id=req.session.userid;
              for(var i=0;i<result.length;i++){
                con2.query("select * from fav where userid=? and song_id=?",[id,result[i].song_id],function(err,result2){
                  console.log(result[i]);
    });
  }
/*
      for(var i=0;i<result.length;i++){
       con.query("select * from fav where userid=? and song_id=?",[id,result[i].song_id],function(err2,result2){
       // result[i].isFav=false;
        if(result2)result[i].isFav=true;
        else result[i].isFav=false;
       });
     }
     */
    }
        if(err)
          throw err;
      if(name=="Deepika Padukone")
         res.render('info',{id:name,route:"star",title:result[0].star,img:"http://images.indianexpress.com/2017/07/deepika-padukone11.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Ranbir Kapoor")
        res.render('info',{id:name,route:"star",title:result[0].star,img:"/images/ranbir.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Aditya Roy Kapoor")
        res.render('info',{id:name,route:"star",title:result[0].star,img:"https://s3-ap-southeast-1.amazonaws.com/seenitcdn/328595937a487571d2.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Alia Bhatt")
        res.render('info',{id:name,route:"star",title:result[0].star,img:"https://static.toiimg.com/photo/msid-58002368/58002368.jpg?56668",data:result,user:req.session.user,username:req.session.username});
      if(name=="Shahrukh Khan")
        res.render('info',{id:name,route:"star",title:result[0].star,img:"https://qph.fs.quoracdn.net/main-qimg-5a8e92719b70da70c30d4f319abfcf93-c",data:result,user:req.session.user,username:req.session.username});

  });

});

router.get('/sort/star/:starname/:name',function(req,res){
      var val=req.params.name;
      var starname=req.params.starname;
      con.query("Select * from songs natural join artists where star=? order by +"+val+" desc",[starname],function(err,result){
           if(err)
          throw err;
      if(starname=="Deepika Padukone")
         res.render('info',{id:starname,route:"star",title:result[0].star,img:"http://images.indianexpress.com/2017/07/deepika-padukone11.jpg",data:result,user:req.session.user,username:req.session.username});
      if(starname=="Ranbir Kapoor")
        res.render('info',{id:starname,route:"star",title:result[0].star,img:"/images/ranbir.jpg",data:result,user:req.session.user,username:req.session.username});
      if(starname=="Aditya Roy Kapoor")
        res.render('info',{id:starname,route:"star",title:result[0].star,img:"https://s3-ap-southeast-1.amazonaws.com/seenitcdn/328595937a487571d2.jpg",data:result,user:req.session.user,username:req.session.username});
      if(starname=="Alia Bhatt")
        res.render('info',{id:starname,route:"star",title:result[0].star,img:"/https://static.toiimg.com/photo/msid-58002368/58002368.jpg?56668",data:result,user:req.session.user,username:req.session.username});
      if(starname=="Shahrukh Khan")
        res.render('info',{id:starname,route:"star",title:result[0].star,img:"https://qph.fs.quoracdn.net/main-qimg-5a8e92719b70da70c30d4f319abfcf93-c",data:result,user:req.session.user,username:req.session.username});
      

      });
      
});


router.get('/himel/:name',function(req,res){
  var name=req.params.name;
  if(name=="bmash"){
    con.query('Select song_id,song_name,duration,year from songs natural join artists where year>2016 and movie is not null ',function(err,result,field){
       if(err)
        throw err;
      res.render('info',{id:name,route:"himel",title:"Bollywood Mashups",img:"https://i.ytimg.com/vi/AjM2eSi9C-M/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
    });
  }
    else
    {
  
  con.query("Select song_name,genre,duration,year from songs natural join artists where genre=?",[name],function(err,result,field){
      
      if(err)
        throw err;
      if(name=="Emotional")
        res.render('info',{id:name,route:"himel",title:result[0].genre,img:"https://i.ytimg.com/vi/-F8spsC9eFw/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Romantic")
        res.render('info',{id:name,route:"himel",title:result[0].genre,img:"http://www.bollywoodlife.com/wp-content/uploads/2017/02/pjimage-7.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Rock")
        res.render('info',{id:name,route:"himel",title:result[0].genre,img:"https://i.ytimg.com/vi/WABKRfyOvgA/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Pop")
        res.render('info',{id:name,route:"himel",title:result[0].genre,img:"https://i.ytimg.com/vi/4Ftt_sMq3MM/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});

  });
   }
});
router.get('/sort/himel/:genre/:name',function(req,res){
      var val=req.params.name;
      var type=req.params.genre;
       if(type=="bmash"){
    con.query('Select song_id,song_name,duration,year from songs natural join artists where year>2016 and movie is not null order by '+val+' desc',function(err,result,field){
       if(err)
        throw err;
      res.render('info',{id:type,route:"himel",title:"Bollywood Mashups",img:"https://i.ytimg.com/vi/AjM2eSi9C-M/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
    });
  }
    else
    {
  
  con.query("Select song_id,song_name,genre,duration,year from songs natural join artists where genre=? order by "+val+" desc",[type],function(err,result,field){
      
      if(err)
        throw err;
      if(type=="Emotional")
        res.render('info',{id:type,route:"himel",title:result[0].genre,img:"https://i.ytimg.com/vi/-F8spsC9eFw/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
      if(type=="Romantic")
        res.render('info',{id:type,route:"himel",title:result[0].genre,img:"http://www.bollywoodlife.com/wp-content/uploads/2017/02/pjimage-7.jpg",data:result,user:req.session.user,username:req.session.username});
      if(type=="Rock")
        res.render('info',{id:type,route:"himel",title:result[0].genre,img:"https://i.ytimg.com/vi/WABKRfyOvgA/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
      if(type=="Pop")
        res.render('info',{id:type,route:"himel",title:result[0].genre,img:"https://i.ytimg.com/vi/4Ftt_sMq3MM/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});

  });
   }
});

 router.get('/retro/:name',function(req,res){

  var name=req.params.name;
  console.log(name);
  con.query("select * from songs natural join artists where genre=? and year<2010",[name],function(err,result){
    if(err)
      throw err
    else{
      if(name=="Rock")
        res.render('info',{id:"Rock",route:"retro",data:result,title:name,img:"https://i0.wp.com/www.ok945.gr/wp-content/uploads/2017/05/top-100-greatest-classic-rock-songs-of-all-time-best-rock-songs-of-70s-80s-90s-youtube-thumbnail.jpg?fit=1280%2C720",user:req.session.user,username:req.session.username});
      if(name=="Pop")
        res.render('info',{id:"Pop",route:"retro",data:result,title:name,img:"https://i.pinimg.com/736x/f8/d5/58/f8d5589a2f02f8b294344ae0c76135db--s-posters-s-songs.jpg",user:req.session.user,username:req.session.username})
      if(name=="Emotional")
        res.render('info',{id:"Emotional",route:"retro",data:result,title:name,img:"https://images-eu.ssl-images-amazon.com/images/I/61W-o2tiN2L._SS500.jpg",user:req.session.user,username:req.session.username})
      if(name=="Romantic")
        res.render('info',{id:"Romantic",route:"retro",data:result,title:name,img:"https://i.ytimg.com/vi/Aol_mpPsDXw/maxresdefault.jpg" ,user:req.session.user,username:req.session.username})
      if(name=="Classical")
        res.render('info',{id:"Classical",route:"retro",data:result,title:name,img:"http://freedesignfile.com/upload/2017/02/Classical-music-retro-concert-poster-template-10.jpg",user:req.session.user,username:req.session.username})
   }
   })
})
 router.get('/sort/retro/:genre/:basis',function(req,res){
  var name=req.params.genre;
  var basis=req.params.basis;
  con.query("select * from songs natural join artists where genre=? and year<2010 order by "+basis+" desc",[name],function(err,result){
    if(err)
      throw err
    else{
      if(name=="Rock")
        res.render('info',{id:"Rock",route:"retro",data:result,title:name,img:"https://i0.wp.com/www.ok945.gr/wp-content/uploads/2017/05/top-100-greatest-classic-rock-songs-of-all-time-best-rock-songs-of-70s-80s-90s-youtube-thumbnail.jpg?fit=1280%2C720",user:req.session.user,username:req.session.username});
      if(name=="Pop")
        res.render('info',{id:"Pop",route:"retro",data:result,title:name,img:"https://i.pinimg.com/736x/f8/d5/58/f8d5589a2f02f8b294344ae0c76135db--s-posters-s-songs.jpg",user:req.session.user,username:req.session.username})
      if(name=="Emotional")
        res.render('info',{id:"Emotional",route:"retro",data:result,title:name,img:"https://images-eu.ssl-images-amazon.com/images/I/61W-o2tiN2L._SS500.jpg",user:req.session.user,username:req.session.username})
      if(name=="Romantic")
        res.render('info',{id:"Romantic",route:"retro",data:result,title:name,img:"https://i.ytimg.com/vi/Aol_mpPsDXw/maxresdefault.jpg" ,user:req.session.user,username:req.session.username})
      if(name=="Classical")
        res.render('info',{id:"Classical",route:"retro",data:result,title:name,img:"http://freedesignfile.com/upload/2017/02/Classical-music-retro-concert-poster-template-10.jpg",user:req.session.user,username:req.session.username})
    }
    })
  })


router.get('/int/:name',function(req,res){
  var name=req.params.name;
  console.log(name);
   if(name=="Old Style"){
    con.query("Select song_id,song_name ,genre,duration ,year from songs natural join artists where year<2015 and artist_id in('aw','lp','ts','cp')",[name],function(err,result,field){
      if(err)
        throw err;
        res.render('info',{id:name,route:"int",title:"Old Style",img:"http://caberfeidhproductions.com/wp-content/uploads/sites/44/2016/06/folk-music-constitute.jpg",data:result,user:req.session.user,username:req.session.username});

    });


   }
   else
   {
    con.query("Select song_id,song_name,genre,duration,year from songs natural join artists where genre=? and artist_id in('aw','lp','ts','cp')",[name],function(err,result,field){
     if(err)
            throw err;
     if(name=="Rock")
        res.render('info',{id:name,route:"int",title:result[0].genre,img:"http://musicartists.org/wp-content/uploads/2014/03/Rock-Music-History.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Romantic")
        res.render('info',{id:name,route:"int",title:result[0].genre,img:"https://i.ytimg.com/vi/HVzUsMkATUU/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Emotional")
        res.render('info',{id:name,route:"int",title:result[0].genre,img:"https://i.ytimg.com/vi/CipZSo9UCwU/hqdefault.jpg",data:result,user:req.session.user,username:req.session.username});
      if(name=="Pop")
        res.render('info',{id:name,route:"int",title:result[0].genre,img:"http://media-cdn.list.ly/production/599/pop_songs-0387518682.png",data:result,user:req.session.user,username:req.session.username});



    });

   }


});
router.get('/sort/int/:genre/:name',function(req,res){
      var val=req.params.name;
      var type=req.params.genre;
       if(type=="Old Style"){
    con.query("Select song_id, song_id,song_name ,genre,duration ,year from songs natural join artists where year<2015 and artist_id in('aw','lp','ts','cp') order by "+val+" desc" ,[val],function(err,result,field){
      if(err)
        throw err;
        res.render('info',{id:type,route:"int",title:"Old Style",img:"http://caberfeidhproductions.com/wp-content/uploads/sites/44/2016/06/folk-music-constitute.jpg",data:result,user:req.session.user,username:req.session.username});
    });
   }
   else
   {
    con.query("Select song_id,song_name,genre,duration,year from songs natural join artists where genre=? and artist_id in('aw','lp','ts','cp') order by "+val+" desc",[type],function(err,result,field){
     if(err)
            throw err;
     if(type=="Rock")
        res.render('info',{id:type,route:"int",title:result[0].genre,img:"http://musicartists.org/wp-content/uploads/2014/03/Rock-Music-History.jpg",data:result,user:req.session.user,username:req.session.username});
      if(type=="Romantic")
        res.render('info',{id:type,route:"int",title:result[0].genre,img:"https://i.ytimg.com/vi/HVzUsMkATUU/maxresdefault.jpg",data:result,user:req.session.user,username:req.session.username});
      if(type=="Emotional")
        res.render('info',{id:type,route:"int",title:result[0].genre,img:"https://i.ytimg.com/vi/CipZSo9UCwU/hqdefault.jpg",data:result,user:req.session.user,username:req.session.username});
      if(type=="Pop")
        res.render('info',{id:type,route:"int",title:result[0].genre,img:"http://media-cdn.list.ly/production/599/pop_songs-0387518682.png",data:result,user:req.session.user,username:req.session.username});



    });

   }
     
});


router.get('/sort/:route/:name',function(req,res){
      var val=req.params.name;
      var route=req.params.route;
      console.log(route);
      if(route=="artist"){
      con.query("Select song_name,artist_name,year,duration from songs natural join artists order by "+val+" desc",function(err,result){
          if(err)
       	throw err;
       res.render('info',{route:route,title:result[0].artist_name,data:result});

      });
    }
    else if(route=="star"){
        con.query("Select song_name,star,year,duration from songs natural join artists order by "+val+" desc",function(err,result){
          if(err)
        throw err;
       res.render('info',{route:route,title:result[0].star,data:result});
     });
    }
    else if(route=="movie"){
      con.query("Select song_name,movie,year,duration from songs natural join artists order by "+val+" desc",function(err,result){
          if(err)
        throw err;
       res.render('info',{route:route,title:result[0].movie,data:result});
     });

    }

});



module.exports=router;

