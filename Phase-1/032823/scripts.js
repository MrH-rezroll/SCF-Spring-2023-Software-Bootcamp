var consoleContent = document.getElementById("console-output");

var isPoweredOn = false;

var player = {
    'position': {
        'x': 0,
        'y': 0
    },
    'health': 100,
    'playerName': "Dr. Ian Malcom",
    'inventory': [0, 0], //index 0 - coins, index 1 - daggers
    'inCombat': false
};

var enemy = {
    'position': {
        'x': 0,
        'y': 0
    },
    'health': 100,
    'enemyName': "Chaos General",
    'dialog': "I'm unpredictable!"
}

// 0 - empty, 1 - chest, 2 - enemy
var mapOfRooms = [
    [0,1,0,2,0,0,0,0],
    [1,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1],
    [0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1]
];

function moveUpOnY(){
    if(!canMoveY()){
        return;
    }
    player.position.y++;
    outputPosition();
    checkLocation();
}
function moveDownOnY(){
    if(!canMoveY()){
        return;
    }
    player.position.y--;
    outputPosition();
    checkLocation();
}

function moveRightOnX(){
    if(!canMoveX()){
        return;
    }
    player.position.x++;
    outputPosition();
    checkLocation();
}
function moveLeftOnX(){
    if(!canMoveX()){
        return;
    }
    player.position.x--;
    outputPosition();
    checkLocation();
}

function canMoveX(){
    if(player.position.x > 0 && player.position.x < mapOfRooms.length){
        return true;
    }
    return false;
}

function canMoveY(){
    if(player.position.y > 0 && player.position.y < mapOfRooms.length){
        return true;
    }
    return false;
}

function outputPosition(){
    return "player.position.x " + player.position.x + " : player.position.y " + player.position.y;
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
    player.inCombat = false;
    consoleContent.innerHTML = outputPosition() + "<br>";

    let currentRoomNumber = mapOfRooms[player.position.y][player.position.x];

    if(currentRoomNumber === 1){
        consoleContent.innerHTML += "You found the treasure chest!";
        player.inventory[0] += 10;
    }

    if(currentRoomNumber === 2){
        if(enemy.health > 0){
            player.inCombat = true;
            consoleContent.innerHTML += enemy.dialog;
        }
        else{
            consoleContent.innerHTML += "He's dead already!";
        }
    }

    /*
    if(player.position.x === 0 && player.position.y === 0){
        consoleContent.innerHTML += "You are at the start.";
    }
    else if (player.position.x === -4 && player.position.y === 7) {
        consoleContent.innerHTML += "You found the treasure chest!";
        player.inventory[0] += 10;
        console.log(player.inventory[0]);
    }
    else{
        consoleContent.innerHTML += "There's nothing here.";
    }
    */
}

function resetGameValues(){
    player.position.x = 0;
    player.position.y = 0;
}

function attackEnemy(damageAmount = 50){
    console.log("I'm attacking");
    if(player.inCombat){
        console.log("I'm attacking in combat");
        enemy.health -= damageAmount;
        console.log(enemy.health);
        if(enemy.health <= 0){
            consoleContent.innerHTML += "Enemy dead.";
        }
    }
}