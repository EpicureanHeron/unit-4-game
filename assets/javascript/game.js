//boolean value to determine if fighter has been selected 
var isFighterSelected = false;

//boolean value to determine if an enemey is currently selected
var isEnemySelected = false;

//initalizes the selectedFighter variable which will be assigned one of the 4 objects below
var selectedFighter;

var currentEnemy;


//object which will be one of the fighters
var fighter1 = { 
    displayArea: ".fighter1",
    name: "Luke Skywalker",
    HP: 100,
    AP: 20,
};

//object which will be one of the fighters
var fighter2 = {
    displayArea: ".fighter2",
    name: "Darth Vader",
    HP: 100,
    AP: 20,
};

//object which will be one of the fighters
var fighter3 = {
    displayArea: ".fighter3",
    name: "Yoda",
    HP: 100,
    AP: 20,
};

//object which will be one of the fighters
var fighter4 = {
    displayArea: ".fighter4",
    name: "Thrawn",
    HP: 100,
    AP: 20,
};

//array which has all the fighters in it, used to populate the page through a for loop
var fightersArr = [fighter1, fighter2, fighter3, fighter4];

//This is used to determine what is the index number in the fightersArr when one of the div blocks are selected. It associated with a piece of data in the <div> tag
var fightersArrIndex;


//initiliazes the power of jQuery
$(document).ready(function() {

    //cycles through the fighter array to append the fighter's stat to their respective blocks with some light formatting
    for (i = 0; i < fightersArr.length; i++) {
        $(fightersArr[i].displayArea).append("<p>"+ fightersArr[i].name + "<br>" + fightersArr[i].HP  + "<br>" + fightersArr[i].AP  + "<br>" + "</p>");
    }

    //when a div containing the class character is clicked, one of three things should happen
    $(".character").click(function() {  
        //if the user has not selected a fighter yet, this triggers
        if (isFighterSelected === false) {

            isFighterSelected = true;
            
            //grabs the index number passed from the html 
            fightersArrIndex = $(this).attr("fightersArrIndex");
            
            //grabs the object from the array based off of that piece of passed data
            selectedFighter = fightersArr[fightersArrIndex];
           
            //updates the screen
            $("#chosenFighter").append($(this));
           
            console.log("The heroe's name: " + selectedFighter.name);
                     

        }
        else if (isEnemySelected === false) {
            isEnemySelected = true
            
             //grabs the index number passed from the html 
            fightersArrIndex = $(this).attr("fightersArrIndex");

            //grabs the object from the array based off of that piece of passed data
            currentEnemy = fightersArr[fightersArrIndex];

            $("#chosenEnemy").append($(this));

            console.log("The enemy's name is: " + currentEnemy.name);
        }         
        else {
            alert("You have all you need");
        }
    
        
    
    })


})
