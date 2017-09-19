
var Archer = {
    hp: 125,
    ap:12,
    de:13
}

var Mage = {
    hp: 100,
    ap:10,
    de:10
}

var Warrior ={
    hp: 150,
    ap: 15,
    de: 15
}
//consider adding name to class objects
var name = $('#characterName').val().trim();

//event handlers
$('#createWarrior').on('click', createWarrior);
$('#createArcher').on('click', createArcher);
$('#createMage').on('click', createMage); 








function createArcher(){

    $.ajax({
        method: "POST",
        url: "api/character",
        data: {
               characterName: $('#characterName').val().trim(), 
               class:"Archer",
               hp: Archer.hp,
               ap: Archer.ap,
               de: Archer.de
              },
        success: console.log('sent')
      });
};

function createMage(){
    
        $.ajax({
            method: "POST",
            url: "api/character",
            data: {
                   characterName: $('#characterName').val().trim(), 
                   class:"Mage",
                   hp: Mage.hp,
                   ap: Mage.ap,
                   de: Mage.de
                  },
            success: console.log('sent')
          });
    };

function createWarrior(){
    
        $.ajax({
            method: "POST",
            url: "api/character",
            data: {
                    characterName: $('#characterName').val().trim(), 
                    class:"Warrior",
                    hp: Warrior.hp,
                    ap: Warrior.ap,
                    de: Warrior.de
                    },
            success: console.log('sent')
            });
    };

    