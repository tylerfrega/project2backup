function getCharacterInfo(){
    
    $.get('/api/character', function(data){
        var characters = data
        console.log(characters);
    })
}

getCharacterInfo();