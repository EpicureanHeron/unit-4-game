//TODOS
//1. DONE 5/27/2018 Make the selectedFighter not selectable again as an enemy...probably remove that class or something??? 
//2. Winning is defeating all 3 enemeys, so need to add that as a criteria
//3. Reset button
//4. Add pictures and stuff
//5. DONE 5/27/2018 Add an attribute to all fighters which allows for their attack power to increase 
//6. Watch the demo again, it would print the battle out at the bottom, should be easy to do, just something I need to add 
//7. 


//boolean value to determine if fighter has been selected 

var isFighterSelected = false;

//boolean value to determine if an enemey is currently selected
var isEnemySelected = false;

//initalizes the selectedFighter variable which will be assigned one of the 4 objects below
var selectedFighter;

var currentEnemy;

var wins = 0;


//object which will be one of the fighters
var fighter1 = { 
    displayArea: ".fighter1",
    name: "Luke Skywalker",
    HP: 50,
    attack: 50,
    attackMod: 5
};

//object which will be one of the fighters
var fighter2 = {
    displayArea: ".fighter2",
    name: "Darth Vader",
    HP: 150,
    attack: 60,
    attackMod: 5
};

//object which will be one of the fighters
var fighter3 = {
    displayArea: ".fighter3",
    name: "Yoda",
    HP: 100,
    attack: 5,
    attackMod: 5
};

//object which will be one of the fighters
var fighter4 = {
    displayArea: ".fighter4",
    name: "Thrawn",
    HP: 1000,
    attack: 20,
    attackMod: 5
};

var fightersArr = [fighter1, fighter2, fighter3, fighter4];

//This is used to determine what is the index number in the fightersArr when one of the div blocks are selected. It associated with a piece of data in the <div> tag
var fightersArrIndex;


//array which has all the fighters in it, used to populate the page through a for loop



//initiliazes the power of jQuery
$(document).ready(function() {

    //cycles through the fighter array to append the fighter's stat to their respective blocks with some light formatting
    function writePage() {
       

        for (i = 0; i < fightersArr.length; i++) {
            $(fightersArr[i].displayArea).html("<p>"+ fightersArr[i].name + "<br>" +"HP: " + fightersArr[i].HP  + "<br>" +"attack: " + fightersArr[i].attack  + "<br>" + "</p>");
            }
        

     }

    writePage();

    //when a div containing the class chooseable is clicked, one of three things should happen
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

            //checks to make sure whatever is clicked is not the same div as selected as the selectedFighter
            if (selectedFighter.name === currentEnemy.name) {
                //sets currentEnemy to an empty string
                currentEnemy = "";
                //sets isEnemySelected to false so the next time a div is pressed, IT will become the enemy
                isEnemySelected = false;
            }
            //if it is not the same block, it actually updates the page
            else {
                $("#chosenEnemy").append($(this));
    
                console.log("The enemy's name is: " + currentEnemy.name);
            }
           
            
            
           
        }         
        else {
            alert("You have all you need");
        }
    
        
    
    })

    $(".attack").click(function() {
        //only works if both the fighter and enemy is selected
        if ((isEnemySelected) && (isFighterSelected)) {
    
       currentEnemy.HP = currentEnemy.HP - selectedFighter.attack;
       
       selectedFighter.HP = selectedFighter.HP - currentEnemy.attack;
        
       //adds attack modifer after attack
       selectedFighter.attack += selectedFighter.attackMod;
      
       if (currentEnemy.HP <= 0) {
       //makes the enemy disappear if they go below 0 HP which makes their display: none 
        $(currentEnemy.displayArea).addClass("dead");
        isEnemySelected = false;
        wins += 1;
        console.log(wins);
        
        
        }
        else if (selectedFighter.HP <= 0){
         console.log("hero dead")

         alert("you lose!")
        }

       writePage();


        }
    })
    $(".attack").click(function() { })


})
