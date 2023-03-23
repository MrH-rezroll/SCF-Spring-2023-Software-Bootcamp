var consoleContent = document.getElementById("console-output");

var isPoweredOn = false;

function power(){
    if (!isPoweredOn){
        consoleContent.innerHTML = "Welcome to the Adventure Game!";
        isPoweredOn = true;
    }
    else {
        consoleContent.innerHTML = "";
        isPoweredOn = false;
    }
}