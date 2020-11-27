const express = require('express');
const userModel	= require.main.require('./models/userModel');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('user/index'); 
})
router.get('/create', (req, res)=>{
	res.render('user/create'); 
})

router.post('/create', (req, res)=>{

	var user = {
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/create');
		}
	});
})
router.get('/upgrade/:id/:table',(req,res)=>{
	var id=req.params.id;
	var tab=req.params.table;
	userModel.updatebyid(tab,id,function(status){
		if(status)
		{
			res.redirect('/home/:table');
		}
	});
})

router.get('/edit/:id', (req, res)=>{

	var data = req.params.id;
	userModel.getById(data,function(results){
		var user ={
		id: req.params.id,
		username: results[0].username,
		password: results[0].password,
		type: results[0].type
	};
		console.log(results[0].username);
		res.render('user/edit', user);
	})
	
})


router.post('/edit/:id', (req, res)=>{

	var user ={
		id: req.params.id,
		username: req.body.username,
		password: req.body.password,
		type: req.body.type
	};
	userModel.update(user,function(status){
		if(status)
		{
			
			res.redirect('/home/userlist');
		}
		else
		{
			res.render('user/edit', user);
		}
	})
})

router.get('/delete/:id', (req, res)=>{
	var data = req.params.id;
	userModel.getById(data,function(results){
		var user ={
		id: req.params.id,
		username: results[0].username,
		password: results[0].password,
		type: results[0].type
	};
		res.render('user/delete', user);
	})
})

router.post('/delete/:id', (req, res)=>{
	var data = req.params.id;
	userModel.delete(data,function(status){
		if(status)
		{
			res.redirect('/home/userlist');
		}
	})
	
})

module.exports = router;


//validation -> express-validator (https://www.npmjs.com/package/express-validator)
//file upload -> express-fileupload (https://www.npmjs.com/package/express-fileupload)
