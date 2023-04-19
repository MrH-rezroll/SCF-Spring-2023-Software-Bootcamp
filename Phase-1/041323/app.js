/*import { readFile } from 'fs/promises';

const starWarsPeopleData = JSON.parse(
    await readFile(
        new URL('./star-wars-people.json', import.meta.url)
    )
);

//console.log(starWarsPeopleData);
*/

async function getStarWarsPeople() {
    const response = await fetch("https://swapi.dev/api/people/");
    const jsonData = await response.json();
    return jsonData;
  }
 
 
 const starWarsPeople = getStarWarsPeople();
 starWarsPeople.then((starWarsPeople) => {
    logElementsOfArrayToConsole(starWarsPeople.results);
 });
 
 function logElementsOfArrayToConsole(theArray){
    theArray.forEach(element => {
        console.log(element);
    });
 }

 var starWarsContentArea = document.getElementById("star-wars-stuff");

 function createStarWarsContent(){
    getStarWarsPeople().then(starWarsPeople => {
        starWarsPeople.results.forEach(person => {
            let thisH3 = document.createElement("h3");
            thisH3.innerHTML = person.name;
            let thisDescription = document.createElement("p");
            thisDescription.innerHTML = "This character is " + person.gender + ".";
            starWarsContentArea.appendChild(thisH3);
            starWarsContentArea.appendChild(thisDescription);
        });
    });
 }
 //createStarWarsContent();