const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();
router.get('/', (req, res)=>{
	res.render('dash/create');
})
router.post('/', (req, res)=>{
	var user={
		username:req.body.username,
		password:req.body.password,
		type:req.body.type
	}
	userModel.insert(user,function(status){
		res.redirect('/login');
	})
})
module.exports = router;