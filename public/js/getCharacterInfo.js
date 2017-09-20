$(document).ready(function(){
    var characterHolder = $('#characterDisplay')
    var characters;
    //gets character data
    $.get('/api/character', function(data){
        characters = data
        console.log(characters);
    }).then(function(){

    //makes character buttons
    characters.forEach(function(character) {
        console.log(character.characterName)
        characterHolder.append(`<button class="characterSelector">${character.characterName}</button>`);
    });

    $('.characterSelector').on('click', selectCharacter);

});


function selectCharacter(){
    
}


//end of ready function
})



