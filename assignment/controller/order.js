const express 	= require('express');
const bookModel = require.main.require('./models/bookModel');
const ordersModel = require.main.require('./models/ordersModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	if(req.cookies['uname'] != null){
		var type= req.params.type;
		bookModel.getById(type,function(results){
			res.render('products/index',{userlist:results});
		})
	}else{
		res.redirect('/login');
	}
})
router.post('/',(req,res)=>{
	if(req.cookies['uname'] != null){
		res.render('home/profile');
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