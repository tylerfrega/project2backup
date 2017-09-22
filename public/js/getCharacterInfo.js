$(document).ready(function(){

makeCharacterButtons();
$(document).on('click', '.characterSelector', selectCharacter );
//end of ready function
});

var characters;
var sessionCharacter;


function makeCharacterButtons(){
    var characterHolder = $('#characterDisplay')
    
    //gets character data
    $.get('/api/character', function(data){
        characters = data
        console.log(characters);
    }).then(function(){

    //makes character buttons
    characters.forEach(function(character, index) {
        //console.log(character.characterName)
        characterHolder.append(`<button class="characterSelector" data-value= "${index}">${character.characterName}</button>`);
    });


});
}


function selectCharacter(){
    var selectedCharacterIndex = $(this).attr('data-value');
    var selectedCharacter = characters[selectedCharacterIndex];
    localStorage.setItem('selectedCharacter', JSON.stringify(selectedCharacter));
    
}