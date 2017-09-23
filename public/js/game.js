$(document).ready(function(){
createPlayer();
setCharacterInfo();
setEnemyInfo();
$('#combatRoll').on('click', function(){attack(enemy)});
$('#checkRoll').on('click', displyCheckRoll);

});

var characterFromLocalStorage = JSON.parse(localStorage.getItem('selectedCharacter'));
var player;
var displayRollArr = [];
var rollTotalDisplay;
var rollResult;



//dummy enemy object, used for testing purposes
var enemy = {
    name: 'orc',
    weaponName: 'Roundsword',
    weaponValue: 3,
    hp: 100,
    ap: 13,
    de: 3,
    alive: true,
    }


///this function executes the necessary code to preform and display the results from our player.combat roll function
function attack(enemy){
    player.combatRoll(enemy);
    displayCombatRoll();
    setEnemyInfo();
}

//this funcion displays the results of the users dice rolls. 
//for now, we store the the results of the dice rolls from the player.combatRoll and player.check roll as global variables 
//so they can be accessed by other functions
function displayCombatRoll(){
        $('#diceDiv').html(`Dice Rolls: ${displayRollArr[0]},  ${displayRollArr[1]}, 
                                         ${displayRollArr[2]}, Total: ${rollTotalDisplay}, 
                                         Result: ${rollResult}`
                                         );
        displayRollArr = [];
}

function displyCheckRoll(){
    player.checkRoll();
    $('#diceDiv').html(`Dice Roll: ${displayRollArr[0]}
    Result: ${rollResult}`);
        displayRollArr = [];    
}


//this creates a new instance of our constructor function and assigns the object the variable name "player"
//we will use the player variable name to preform attack and check functions on the game page
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

//this function displays our characters stats. hp, ap, de, class and weapon name
function setCharacterInfo(){
    $('#welcome').html(player.characterName);

    $('#characterInfoDisplay').html(`<li class= .characterAttributes> Hp: ${player.hp}</li>
                                       <li class= .characterAttributes> Ap: ${player.ap}</li>
                                       <li class= .characterAttributes> De: ${player.de}</li>
                                       <li class= .characterAttributes> Class: ${player.characterClass}</li>
                                       <li class= .characterAttributes> Weapon: ${player.weapon}</li>`);
}

//this function displays the current enemy stats
function setEnemyInfo(){
    if(enemy.hp <= 0){
        enemy.alive === false
        $('#enemyName').html(`${enemy.name} has fallen`);
        $('#enemyInfoDisplay').hide();
        
        enemy = '';
    }else{
    $('#enemyName').html(`${enemy.name}`)
    $('#enemyInfoDisplay').html(`<li class= .enemyAttributes> Hp: ${enemy.hp}</li>
                                     <li class= .enemyAttributes> Ap: ${enemy.ap}</li>
                                     <li class= .enemyAttributes> De: ${enemy.de}</li>
                                     <li class= .enemyAttributes> Weapon: ${enemy.weaponName}</li>`);
    }
}

//our constructor function. This takes the info from the selected character (stored in local memory on the getCharacterInfo.js page)
//and creates a new object with attack and check methods attached
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
        var rollTotal = roll1 + roll2 + roll3;
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
            enemy.hp -= rollTotal + this.ap - enemy.de;
        }
        else if(rollTotal >= 27){
            result = 'Critical Success';
            enemy.hp -= rollTotal + rollTotal + this.ap;
        }
        displayRollArr.push(roll1);
        displayRollArr.push(roll2);
        displayRollArr.push(roll3);
        rollResult = result;
        rollTotalDisplay = rollTotal;
        
        console.log(enemy.de)
        console.log(enemy)    
    };
    this.checkRoll = function(){
        roll = Math.floor(Math.random() * 10) + 1;
        
        if(roll >=5) {
            displayRollArr = [];
            displayRollArr.push(roll);
            rollResult = 'Success';        
        }
        else if(roll < 5) {
            displayRollArr = [];
            displayRollArr.push(roll);
            rollResult = 'Fail';        
        }
    }
    
}