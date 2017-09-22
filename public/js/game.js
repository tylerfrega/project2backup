$(document).ready(function(){
createPlayer();
setCharacterInfo();
$('#combatRoll').on('click', function(){attact(enemy)});

});

var characterFromLocalStorage = JSON.parse(localStorage.getItem('selectedCharacter'));
var player;




var enemy = {
    name: 'orc',
    weaponName: 'Roundsword',
    weaponValue: 3,
    hp: 100,
    ap: 13,
    de: 3,
    alive: true,
    checkStats: function(){
        if(this.hp <= 0){
            this.alive === false
            console.log(`${this.name} has fallen`);
        }else{return}
    }
}

function attack(enemy){
    $('#diceDiv').html(`$`)
    player.combatRoll(enemy)
}






function createPlayer(){
     var selectedCharacter = characterFromLocalStorage;
    
     sessionCharacter = new Character(selectedCharacter.characterName, 
                                         selectedCharacter.class,
                                         selectedCharacter.hp,
                                         selectedCharacter.ap,
                                         selectedCharacter.de,
                                         selectedCharacter.weapon,
                                         selectedCharacter.lore
                                        );
    player = sessionCharacter;
    console.log(player);

}


function setCharacterInfo(){
    $('#welcome').html(player.characterName);

    $('#characterInfoDisplay').append(`<li class= .characterAttributes> Hp: ${player.hp}</li>
                                       <li class= .characterAttributes> Ap: ${player.ap}</li>
                                       <li class= .characterAttributes> De: ${player.de}</li>
                                       <li class= .characterAttributes> Class: ${player.characterClass}</li>
                                       <li class= .characterAttributes> Weapon: ${player.weapon}</li>`);
}











function Character(characterName, characterClass, hp, ap, de, weapon, lore ) {
    this.characterName = characterName;
    this.characterClass = characterClass;
    this.hp = hp;
    this.ap = ap;
    this.de = de;
    this.weapon = weapon;
    this.lore = lore;
    this.combatRoll = function(enemy){
        var roll1 = Math.floor((Math.random() * 10) + 1);
        var roll2 = Math.floor((Math.random() * 10) + 1);
        var roll3 = Math.floor((Math.random() * 10) + 1);
        var rollTotal = roll1 + roll2 + roll3 - enemy.de;
        var result;
    
        if(rollTotal < 4){
            result = 'Critical Fail';
            this.hp -= rollTotal + this.ap;
        }
        else if(rollTotal >= 4 && rollTotal < 15){
            result = 'Fail';
        }
        else if(rollTotal >=15 && rollTotal <27){
            result = 'Success';
            enemy.hp -= rollTotal + this.ap;
        }
        else if(rollTotal >= 27){
            result = 'Critical Success';
            enemy.hp -= rollTotal + this.ap;
        }
        console.log(roll1)
        console.log(roll2)
        console.log(roll3)
        console.log(rollTotal)
        console.log(enemy.de)
        console.log(result)
        console.log(enemy)    
    };
    this.checkRoll = function(){
        roll = Math.floor(Math.random() * 10) + 1;
        
        if(roll <=5) {
            return 'Success';        
        }
        else if(roll > 5) {
            return 'Fail';        
        }
    }
    
}