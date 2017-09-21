$(document).ready(function(){

makeCharacterButtons();
$(document).on('click', '.characterSelector', selectCharacter );
//end of ready function
})

var characters;


function makeCharacterButtons(){
    var characterHolder = $('#characterDisplay')
    
    //gets character data
    $.get('/api/character', function(data){
        characters = data
        console.log(characters);
    }).then(function(){

    //makes character buttons
    characters.forEach(function(character, index) {
        console.log(character.characterName)
        characterHolder.append(`<button class="characterSelector" data-value= "${index}">${character.characterName}</button>`);
    });


});
}


function Character(characterName, characterClass, hp, ap, de, weapon, lore ) {
    this.characterName = characterName;
    this.characterClass = characterClass;
    this.hp = hp;
    this.ap = ap;
    this.de = de;
    this.weapon = weapon;
    this.lore = lore;
    this.attack = function(){
        
    },
    this.check = function(){}
    
}


function selectCharacter(){
     var selectedCharacter = $(this).attr('data-value');
    
    var sessionCharacter = new Character(characters[selectedCharacter].characterName, 
                                         characters[selectedCharacter].class,
                                         characters[selectedCharacter].hp,
                                         characters[selectedCharacter].ap,
                                         characters[selectedCharacter].de,
                                         characters[selectedCharacter].weapon,
                                         characters[selectedCharacter].lore
                                        );
    console.log(sessionCharacter);
    localStorage.setItem('sessionCharacter', JSON.stringify(sessionCharacter));

}
    
