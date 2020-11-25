const express                   = require('express');
const bodyParser 	            = require('body-parser');
const session                   = require('express-session');
const cookieParser 	            = require('cookie-parser');
const {check,validationResult}	=require('express-validator');
const fs 						= require("fs");
const expfileupload			    = require('express-fileupload');
const mongoClient               =  require('mongodb').MongoClient;
const cloudinary                = require('./config/cloudinary.js');
const upload                    = require('./config/multer.js');
const assert                    = require('assert');
const { MongoClient }           = require('mongodb');
const home					    = require('./controller/home');
const about					    = require('./controller/about');
const contact					= require('./controller/contact');
const books					    = require('./controller/books');
const library				    = require('./controller/library');
const login					    = require('./controller/login');
const signup					= require('./controller/signup');

/* const user					    = require('./controller/user');
const logout					= require('./controller/logout'); */
require('dotenv').config()
const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use(expfileupload());
app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact);
app.use('/books', books);
app.use('/library', library);
app.use('/login', login);
app.use('/signup', signup);
/* app.use('/user', user);
app.use('/logout', logout); */

app.get('/', (req, res)=>{
	res.render('home/index');	
});

app.listen(3000, (error)=>{
    console.log('express server started at 3000...');
});