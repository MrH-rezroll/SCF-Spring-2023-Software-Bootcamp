var consoleContent = document.getElementById("console-output");

var isPoweredOn = false;

var posX = 0;
var posY = 0;

function moveUpOnY(){
    posY++;
    outputPosition();
    checkLocation();
}
function moveDownOnY(){
    posY--;
    outputPosition();
    checkLocation();
}

function moveRightOnX(){
    posX++;
    outputPosition();
    checkLocation();
}
function moveLeftOnX(){
    posX--;
    outputPosition();
    checkLocation();
}

function outputPosition(){
    return "PosX " + posX + " : PosY " + posY;
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
    consoleContent.innerHTML = outputPosition() + "<br>";
    if(posX === 0 && posY === 0){
        consoleContent.innerHTML += "You are at the start.";
    }
    else if (posX === -4 && posY === 7) {
        consoleContent.innerHTML += "You found the treasure chest!";
    }
    else{
        consoleContent.innerHTML += "There's nothing here.";
    }
}

function resetGameValues(){
    posX = 0;
    posY = 0;
}