$(document).ready(function(){
//createWeaponsBtn();
//event handlers
$(document).on('click', '.classBtn', selectClass);
$(document).on('click', '.weaponsSelectorBtn', selectWeapon);
$('#submitCharacter').on('click', createCharacter);

});
//consider adding name to class objects
var name = $('#characterName').val().trim();
var Archer;
var Mage;
var Warrior;

var archerWeapons = [{weaponName: "Longbow", value: 6},{weaponName: "Crossbow", value: 8}, {weaponName: "Shortsword", value: 4}];
var mageWeapons = [{weaponName: "Wand", value: 7},{weaponName: "Staff", value: 10}, {weaponName: "Dagger", value: 3}];
var warriorWeapons = [{weaponName: "Mace", value: 5},{weaponName: "Sword and Sheild", value: 7}, {weaponName: "Axe", value: 6}];

var selectedClass;
var selectedWeapon;



function selectClass(){
    selectedClass = $(this).attr('data-className');
    console.log(selectedClass);

    switch(selectedClass){
        case "Archer":
            createArcherWeaponsBtn();
            break;
        case "Mage":
            createMageWeaponsBtn();
            break;
        case "Warrior":
            createWarriorWeaponsBtn();
            break;
    }

}
 
function selectWeapon(){
    var selectedWeaponName = $(this).html().trim();
    var selectedWeaponIndex = $(this).attr('data-value');
    
    if(selectedWeaponName ==='Longbow' || selectedWeaponName === 'Crossbow' || selectedWeaponName === 'Shortsword'){
        selectedWeapon = archerWeapons[selectedWeaponIndex];
    }
    else if(selectedWeaponName ==='Wand'  || selectedWeaponName === 'Staff' || selectedWeaponName === 'Dagger'){
        selectedWeapon = mageWeapons[selectedWeaponIndex];
    }
    else if(selectedWeaponName ==='Mace' || selectedWeaponName === 'Sword and Sheild' || selectedWeaponName === 'Axe'){
        selectedWeapon = warriorWeapons[selectedWeaponIndex];
    }
    console.log(selectedWeapon);

    Archer = {
        hp: 125,
        ap:12 + selectedWeapon.value,
        de:13,
        weapon: selectedWeaponName
    }
    
    Mage = {
        hp: 100,
        ap:10 + selectedWeapon.value,
        de:10,
        weapon: selectedWeaponName
    }
    
    Warrior = {
        hp: 150,
        ap: 15 + selectedWeapon.value,
        de: 15,
        weapon: selectedWeaponName
    }
    

}



function createArcherWeaponsBtn(){

    $('#selectWeaponsText').show();
    $('.mageWeapons').hide();
    $('.warriorWeapons').hide();

    var archerWeaponsHolder = $('#archerWeaponsHolder');
    archerWeapons.forEach(function(weapon, index) {
        archerWeaponsHolder.append(`<button class="weaponsSelectorBtn archerWeapons" data-value= "${index}" 
                                    "data-weapon="${archerWeapons[index].weaponName}">
                                    ${archerWeapons[index].weaponName}</button>`);
    });
}

function createMageWeaponsBtn(){

    $('#selectWeaponsText').show();
    $('.warriorWeapons').hide();
    $('.archerWeapons').hide();

    var mageWeaponsHolder = $('#mageWeaponsHolder');
    mageWeapons.forEach(function(weapon, index) {
        mageWeaponsHolder.append(`<button class="weaponsSelectorBtn mageWeapons" data-value= "${index}" 
                                  "data-weapon="${mageWeapons[index].weaponName}">
                                    ${mageWeapons[index].weaponName}</button>`);
    
    });
}


function createWarriorWeaponsBtn(){
    
    $('#selectWeaponsText').show();
    $('.archerWeapons').hide();
    $('.mageWeapons').hide();

    var warriorWeaponsHolder = $('#warriorWeaponsHolder');
    warriorWeapons.forEach(function(weapon, index) {
        warriorWeaponsHolder.append(`<button class="weaponsSelectorBtn warriorWeapons" data-value= "${index}" 
                                     "data-weapon="${mageWeapons[index].weaponName}">
                                    ${warriorWeapons[index].weaponName}</button>`);    
    });
}

   


function createCharacter(){
    switch(selectedClass){
        case "Archer":
            createArcher();
            break;
        case "Mage":
            createMage();
            break;
        case "Warrior":
            createWarrior();
            break;
    }
}



function createArcher(){
console.log(selectedWeapon.weaponName)
    $.ajax({
        method: "POST",
        url: "api/character",
        data: {
               characterName: $('#characterName').val().trim(), //var name?
               class:"Archer",
               hp: Archer.hp,
               ap: Archer.ap,
               de: Archer.de,
               weapon: Archer.weapon,
               lore: $('#characterLore').val()
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
                   de: Mage.de,
                   weapon: Mage.weapon,
                   lore: $('#characterLore').val()
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
                    de: Warrior.de,
                    weapon: Warrior.weapon,
                    lore: $('#characterLore').val()
                    },
            success: console.log('sent')
            });
    };

    