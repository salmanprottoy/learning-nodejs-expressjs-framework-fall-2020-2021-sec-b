//declaration
const express 		= require('express');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const expl          = require('express-ejs-layouts');
const cookieParser 	= require('cookie-parser');
const nodemailer 	= require("nodemailer");
const {check,validationResult}=require('express-validator');
const login			= require('./controller/login');
const home			= require('./controller/home');
const user			= require('./controller/user');
const logout		= require('./controller/logout');
const dash  		= require('./controller/dash');
const cart  		= require('./controller/cart');
const book		= require('./controller/book');
const addBooks		= require('./controller/addBooks');
const fastcsv 		= require("fast-csv");
const fs 			= require("fs");
const app 			= express();

//config
app.use(expl);
app.set('view engine', 'ejs');
//middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use('',function(req, res, next) {
  res.locals.glob = req.session.use;
  next();
});
app.use('/dash', dash);
app.use('/cart', cart);
app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);
app.use('/user', user);
app.use('/book', book);
app.use('/addBooks', addBooks);


//route
app.get('/', (req, res)=>{
	res.render('dash/dashboard');	
});

//server startup
app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});