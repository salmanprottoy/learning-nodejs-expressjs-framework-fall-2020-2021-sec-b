const express 	= require('express');
const cartsModel = require.main.require('./models/cartsModel');
const router 	= express.Router();

router.get('/:id', (req, res)=>{
	if(req.cookies['uname'] != null){
		var user= req.params.id;
		cartsModel.getById(user,function(results){
			res.render('mycart/index',{userlist:results});
		})
	}else{
		res.redirect('/login');
	}
})

module.exports = router;