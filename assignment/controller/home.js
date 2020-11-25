const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	/* if(req.cookies['uname'] != null){
		res.render('home/index');
	}else{
		res.redirect('/login');
    } */
    res.render('home/index');
})

router.get('/about', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/about', {userlist: results});
	});

})

router.get('/books', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/books', {userlist: results});
	});

})

router.get('/library', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/library', {userlist: results});
	});

})

router.get('/contact', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/contact', {userlist: results});
	});

})

router.get('/login', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/login', {userlist: results});
	});

})


router.get('/signup', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/signup', {userlist: results});
	});

});



module.exports = router;