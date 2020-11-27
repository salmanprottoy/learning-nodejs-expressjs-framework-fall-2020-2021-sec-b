const express 	= require('express');
const bookModel = require.main.require('./models/bookModel');
const cartsModel = require.main.require('./models/cartsModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	if(req.cookies['uname'] != null){
		bookModel.getAll(function(results){
			res.render('home/addBooks',{userlist:results});
		})
	}else{
		res.redirect('/login');
	}
});


module.exports = router;