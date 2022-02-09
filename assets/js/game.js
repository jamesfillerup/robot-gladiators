
// function to generate a random numeric value
var randomNumber = function(40, 60) {
    var value = Math.floor(Math.random() *(21)) +40;

    return value;
};



// prints 3.141592653589793
console.log(Math.PI);

 // rounds to the nearest whole number (4)
console.log(Math.round(4.4));

 // prints the square root (5)
console.log(Math.sqrt(25));





// fight function (now with parameter for enemy's name)
var fight= function(enemy) {
    console.log(enemy);


    while (playerInfo.health > 0 && enemy.health > 0) {
        //&& can satisfy both conditions for true or false
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');

        // award player money for winning
            playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // generate random damage value based on player's attack power
        var damage = randomNumber(enemy.attack -3, enemy.attack);
        // remove players's health by subtracting the amount set in the enemy.attack variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};

var startGame=function(){
    // alert("The game has now ended. Let's see how you did!");

    // reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    // fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {

        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {

            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            // the () in the alert above lets arithmetic operation to perform then concentrate its sum to the rest. just like normal math
            // i does not add the one unless there are ()

            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
                // if we're not at the last enemy in the array
                if (playerInfo.health > 0 && i < enemy.names.length - 1){
                    //ask if the player wants to use the store before the next round
                    var storeConfirm = confirm("The fight is over, visit the store before the next round?");
                
                    //if yes, take them to the store() Function
                    if (storeConfirm) {
                        shop();
                    }
                }
        }

        // if player isn't alive, stop the game
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            startGame();
        }
         // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
        endGame();
    }
}


var endGame=function(){
    alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = confirm("Would you like to play again?");

    if(playAgainConfirm){
        //restart the game
        startGame();
    }
    else {
        alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}



var shop = function(){
    //ask player what they'd like to do
    var shopOptionPrompt = prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action
    switch(shopOptionPrompt){
        case "REFILL": // new case
        case "refill":
            playerInfo.money ();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;

        case "LEAVE": //NEW CASE
        case "leave":
            alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option 
            shop();
            break;
    }
};

enemy.health = randomNumber();

var playerInfo = {
    name: prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, //COMMA! 
    refillHealth: function() {
        if (this.money >=7){
            alert("Refilling player's health by 20 for 7 dollars.");
            this.health +=20;
            this.money -=7;
        }
        else {
            alert("You don't have enough money!");
        }
        
    }, //COMMA!
    upgradeAttack: function() {
        this.attack +=6;
        this.money -=7;
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber (10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber (10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber (10, 14)
    }
];
var enemy.names = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemy.health = Math.floor(Math.random() * 21) + 40;
var enemy.attack = 12;

console.log(enemy.names);
console.log(enemy.names.length);
console.log(enemy.names[0]);
console.log(enemy.names[1]);
console.log(enemy.names[2]);

startGame();