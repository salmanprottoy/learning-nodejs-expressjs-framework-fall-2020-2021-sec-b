const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	/* if(req.cookies['uname'] != null){
		res.render('home/index');
	}else{
		res.redirect('/login');
    } */
    res.render('library/index');
})

module.exports = router;