const db = require('./db');
module.exports ={

	getById: function(id,callback){
		var sql = "select * from cart where id='"+id+"'";
		console.log(sql);
		db.getResults(sql,function(results){
			console.log(results);
			callback(results);
		})
	},
	getAll: function(callback){
		var sql = "select * from cart";
		db.getResults(sql, function(results){
			callback(results);
		});


	},
	insert: function(user, callback){
		var sql = "insert into cart VALUES ('"+user.id+"', '"+user.username+"' , '"+user.bookid+"' , '"+user.totalAmount+"')";
		
		//console.log(sql);

		db.execute(sql, function(status){
			console.log(status);
			callback(status);
		});
	}
}