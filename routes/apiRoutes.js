var express = require('express');
var router = express.Router();
var db = require("../models");

//post route to create a new character
router.post('/character', function(req, res){
    var newCharacter = {
        characterName: req.body.characterName,
        class: req.body.class,
        hp: req.body.hp,
        ap: req.body.ap,
        de: req.body.de,
        UserId: req.user.id
    }
    db.Character.create(newCharacter);
    //redirect to new page displaying characters???
});

router.get('/character', function(req, res){
    db.Character.findAll({
		where:{UserId: req.user.id}
	}).then(function(characterData){
		res.json(characterData);
	})
})


module.exports = router;