const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	if(req.cookies['uname'] != null){
		res.render('home/index');
	}else{
		res.redirect('/login');
	}
})
router.get('/profile',(req,res)=>{
	if(req.cookies['uname'] != null){
		res.render('home/profile');
	}else{
		res.redirect('/login');
	}
})

router.get('/orders',(req,res)=>{
	if(req.cookies['uname'] != null){
		res.render('home/orders');
	}else{
		res.redirect('/login');
	}
})
router.get('/addBooks',(req,res)=>{
	if(req.cookies['uname'] != null){
		res.render('home/addBooks');
	}else{
		res.redirect('/login');
	}
})
router.get('/bookList',(req,res)=>{
	if(req.cookies['uname'] != null){
		res.render('home/bookList');
	}else{
		res.redirect('/login');
	}
})
router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/userlist', {userlist: results});
	});

});

module.exports = router;