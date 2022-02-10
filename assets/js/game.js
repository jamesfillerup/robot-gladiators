
// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() *(max-min +1)) +min;

    return value;
};


var fightOrSkip = function(){
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//conditional recursive function call

if (promptFight === "" || promptFight === null) {
    alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
}

    // if player picks "skip" confirm and then stop the loop
    promptFight =promptFight.toLowerCase();

    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
        alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
       // subtract money from playerMoney for skipping, but don't let them go into the negative
        playerInfo.money = Math.max(0, playerInfo.money - 10);

        //return true if player wants to leave
        return true;
        shop();
        }
    }
    return false;
};
// fight function (now with parameter for enemy's object holding name, health, and attack values)
var fight= function(enemy) {
    
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if theyd like to fight of or skip using fightOrSkip function
        if (fightOrSkip()){
            break;
        } 
        //<--- replace code with this function call
        var damage= randomNumber(playerInfo.attack - 3, playerInfo.attack);
        //&& can satisfy both conditions for true or false
        // ask player if they'd like to fight or run


        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemy's health
        if (enemy.health <= 0) {
            alert(enemy.name + ' has died!');

        // award player money for winning
            playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
            break;
        } else {
            alert(enemy.name + ' still has ' + enemy.health + ' health left.');
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
            alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
            break;
        } else {
            alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};

var startGame=function(){
    
    // alert("The game has now ended. Let's see how you did!");

    // reset player stats
    playerInfo.reset();

    // fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {

        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {

            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            
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
                if (playerInfo.health > 0 && i < enemyInfo.length - 1){ 
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
            alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};


var endGame=function(){
    alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        alert("You've lost your robot in battle.");
    }
    //ask player if theyd like to play again
    var playAgainConfirm = confirm("Would you like to play again?");

    if(playAgainConfirm){
        //restart the game
        startGame();
    }
    else {
        alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};



var shop = function(){
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    // use switch to carry out action
shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};
/* END GAME FUNCTIONS */

/* GAME INFO / VARIABLES */

// function to set name
var getPlayerName = function() {
    var name = "";
        while (name === "" || name === null) {
            name= prompt("What is your robot's name?");
        }  
    console.log("Your robot's name is " + name);
    return name;
};

// player info

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
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
        if (this.money >=7){
            alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack +=6;
        this.money -=7;
        }
    }
};


// enemy info
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


console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);


// startGame();