//makes the document listen for clicks
var fighterSelected = false;

var enemySelected = false;

$(document).ready(function() {

    $(".character").click(function() {  

        if (fighterSelected === false) {

            fighterSelected = true;
            console.log($(this).attr("dataValue"));
            $("#chosenFighter").append($(this));

        }
        else if (enemySelected === false) {
            enemySelected = true
            console.log("ENEMEY CHOSEN");
            $("#chosenEnemy").append($(this));
        }         
        else {
            alert("You have all you need");
        }
    
        
    
    })


})
