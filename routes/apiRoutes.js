var express = require('express');
var router = express.Router();
var db = require("../models");


router.post('/character', function(req, res){
    var newCharacter = {
        characterName: req.body.characterName,
        hp: req.body.hp,
        ap: req.body.ap,
        UserId: req.user.id
    }
    db.Character.create(newCharacter);
});


module.exports = router;