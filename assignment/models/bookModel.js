const db = require('./db');

module.exports ={

	getById: function(type,callback){
		var sql = "select * from book where id='"+id+"'";
		console.log(sql);
		db.getResults(sql,function(results){
			console.log(results);
			callback(results);
		})
	},
	getAll: function(callback){
		var sql = "select * from book";
		db.getResults(sql, function(results){
			callback(results);
		});


	},
	insert: function(user, callback){
		var sql = "insert into cart VALUES ('"+user.id+"', '"+user.type+"' , '"+user.company+"' , '"+user.price+"')";
		
		//console.log(sql);

		db.execute(sql, function(status){
			console.log(status);
			callback(status);
		});
	},
	update: function(user,callback){
		var sql = "update user set username='"+user.username+"' , email='"+user.email+"' , contactNumber='"+user.phone+"' , designation='"+user.designation+"' where id = '"+user.id+"' ;";
		db.execute(sql,function(status){
			callback(status);
		})
	},
	delete: function(id,callback){
		var sql = "delete from user where id = '"+id+"';";
		db.execute(sql,function(status){
			callback(status);
		})
	}
}