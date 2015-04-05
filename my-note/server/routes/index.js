(function(){

	var express = require('express');
	var router = express.Router();
	var mongojs= require('mongojs')
	var db = mongojs('my-note', ['tasks']);

	router.get('/', function(req, res){
		res.render('index');
	});

	module.exports = router;
}());