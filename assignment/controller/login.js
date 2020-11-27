const express 	= require('express');
const userModel	= require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
})

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(status,results){
		if(status){
			console.log(results);
			res.cookie('uname', req.body.username);
			res.cookie('id',results[0].id);
			var user = {
				username: results[0].username,
				id: results[0].id,
				type : results[0].type,
				pass: results[0].password,
			};
			req.session.use =user;
			console.log(req.session.use);
			req.session.username=results[0].username;
			req.session.idd = results[0].id;
			req.session.pass = results[0].password;
			if(user.type=="admin") 
				res.redirect('/home');
			else res.redirect('/user');
		}else{
			res.redirect('/login');
		}
	});

})

module.exports = router;