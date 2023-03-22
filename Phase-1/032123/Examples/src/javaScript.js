var myTestOutput = document.getElementById("TestParagraph");

var name = "Hodge";

function sayHello(nameToSayHelloTo){
    myTestOutput.innerText = "Hello " + nameToSayHelloTo + ".";
}

var names = ["Hodge", "Malcom", "Goldblum", "Dr. Ian"];

function displayNames(namesToDisplay){
    for(var i = 0; i < namesToDisplay.length; i++){
        myTestOutput.innerText += namesToDisplay[i];
    }
}

displayNames(names);