var consoleContent = document.getElementById("console-output");

var isPoweredOn = false;

var thePlayer = new Player("Donkus", 4, 4);

var enemy = {
    'position': {
        'x': 0,
        'y': 0
    },
    'health': 100,
    'enemyName': "Chaos General",
    'dialog': "I'm unpredictable!"
}

var theEnemies = [
    new Enemy("Enemy 1", 3, 3, "What? I'm gonna kick yo.."),
    new Enemy("Enemy 2", 4, 4, "I'm witty"),
    new Enemy("Enemy 3", 5, 5)
];

// 0 - empty, 1 - chest, 2 - enemy
var mapOfRooms = [
    [0,1,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1],
    [0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1]
];

function initializeRoomEnemies(){
    for(i = 0; i < theEnemies.length; i++){
        mapOfRooms[theEnemies[i]._position.x][theEnemies[i]._position.y] = 2;
    }
}

function getEnemy(enemyX, enemyY){
    for(i = 0; i < theEnemies.length; i++){
        if(theEnemies[i]._position.x === enemyX && theEnemies[i]._position.y === enemyY ){
            return theEnemies[i];
        }
    }
}

function moveUpOnY(){
    thePlayer._position.y++;
    outputPosition();
    checkLocation();
}
function moveDownOnY(){
    thePlayer._position.y--;
    outputPosition();
    checkLocation();
}

function moveRightOnX(){
    thePlayer._position.x++;
    outputPosition();
    checkLocation();
}
function moveLeftOnX(){
    thePlayer._position.x--;
    outputPosition();
    checkLocation();
}

function outputPosition(){
    return "thePlayer._position.x " + thePlayer._position.x + " : thePlayer._position.y " + thePlayer._position.y;
}

function power(){
    if (!isPoweredOn){
        resetGameValues();
        consoleContent.innerHTML = "Welcome to the Adventure Game!";
        isPoweredOn = true;
    }
    else {
        consoleContent.innerHTML = "";
        isPoweredOn = false;
    }
}

console.log("hello console");

function checkLocation(){
    thePlayer._inCombat = false;
    consoleContent.innerHTML = outputPosition() + "<br>";

    try{
        let currentRoomNumber = mapOfRooms[thePlayer._position.y][thePlayer._position.x];
    }
    catch(e){
        console.log(e);
        consoleContent.innerHTML += "You stuck in a wall!";
        return;
    }

    if(currentRoomNumber === 1){
        consoleContent.innerHTML += "You found the treasure chest!";
        thePlayer._inventory[0] += 10;
    }

    if(currentRoomNumber === 2){
        let currentEnemy = getEnemy(thePlayer._position.x, thePlayer._position.y);
        if(currentEnemy._health > 0){
            thePlayer._inCombat = true;
            consoleContent.innerHTML += currentEnemy._dialog;
        }
        else{
            consoleContent.innerHTML += "He's dead already!";
        }
    }

    /*
    if(thePlayer._position.x === 0 && thePlayer._position.y === 0){
        consoleContent.innerHTML += "You are at the start.";
    }
    else if (thePlayer._position.x === -4 && thePlayer._position.y === 7) {
        consoleContent.innerHTML += "You found the treasure chest!";
        thePlayer._inventory[0] += 10;
        console.log(thePlayer._inventory[0]);
    }
    else{
        consoleContent.innerHTML += "There's nothing here.";
    }
    */
}

function resetGameValues(){
    thePlayer._position.x = 0;
    thePlayer._position.y = 0;
    initializeRoomEnemies();
}

function attackEnemy(damageAmount = 50){
    console.log("I'm attacking");
    if(thePlayer._inCombat){
        let currentEnemy = getEnemy(thePlayer._position.x, thePlayer._position.y);
        console.log("I'm attacking in combat");
        currentEnemy._health -= damageAmount;
        console.log(currentEnemy._health);
        if(currentEnemy._health <= 0){
            consoleContent.innerHTML += "Enemy dead.";
        }
    }
}