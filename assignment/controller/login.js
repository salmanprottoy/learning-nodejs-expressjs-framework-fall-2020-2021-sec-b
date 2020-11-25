const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	/* if(req.cookies['uname'] != null){
		res.render('home/index');
	}else{
		res.redirect('/login');
    } */
    res.render('login/index');
})

router.post('/', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home', {userlist: results});
	});

})

module.exports = router;