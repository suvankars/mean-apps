(function(){

	var express = require('express');
	var router = express.Router();
	var mongojs= require('mongojs')
	var db = mongojs('my-note', ['tasks']);

	router.get('/', function(req, res) {
    	res.render('index');
  	});	

	router.get('/api/tasks', function(req, res) {
	    db.tasks.find(function(err, data) {
	      res.json(data);
	    });
  	});

	router.post('/api/tasks', function(req, res) {
		db.tasks.insert(req.body, function(err, data){
			res.json(data)
		});
	});
 
 	module.exports = router;
}());