var express = require('express');
var router = express.Router();
var db = require("../models");

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index', {user: req.user});
});

router.get('/createCharacter', ensureAuthenticated, function(req, res){
	res.render('createCharacter');
});

router.get('/characters', ensureAuthenticated, function(req, res){
	res.render('characters', {user: req.user})
	
});

router.get('/game', ensureAuthenticated, function(req, res){
	res.render('game', {user: req.user})
	
});











function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;



