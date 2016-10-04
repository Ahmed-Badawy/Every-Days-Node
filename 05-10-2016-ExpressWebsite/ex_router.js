
var express= require('express');
var router = express.Router({
	mergeParams:true
});


// respond to:     external/
router.get("/",function(request,result){
	result.send("this is the basic route inside /external route")
})

// respond to:     external/router1
router.get("/router1",function(request,result){
	result.send("this is the /external/route1 answer")
})


/*********************************************************************
This is how we define route group
**********************************************************************/
router.route("/router-group")
	.all(function(res,req,next){
		console.log("this runs the first thing");
		next();//path to the next match
	})
	.get(function(req,res){
		res.send("this is the /external/router-group (get) answer")
	})
	.post(function(req,res){
		res.send("this is the /external/router-group (post) answer")
	})
/**********************************************************************/




module.exports = router;
module.exports.action1 = function(req,res){
	console.log(req.params);
	res.send("this is the Action")
};





