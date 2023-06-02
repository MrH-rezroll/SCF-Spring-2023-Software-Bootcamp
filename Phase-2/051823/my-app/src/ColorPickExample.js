import {React, useState} from 'react';

export default function ColorPickExample() {

    const [bgColor, setBGColor] = useState("green");
    const [possibleBGColor, setPossibleBGColor] = useState("green");

    const toggleBGColor = () => { setBGColor(possibleBGColor); }
    
    const updateBGColor = (event) => { event.preventDefault(); setPossibleBGColor(event.target.value); }
    
    return(
        <div data-testid="background" style={{background: bgColor}}>
            <h1>Background Color Changer</h1>
            <input data-testid="input" label="color" onChange={updateBGColor} type="text" /><br />
            <button data-testid="button" onClick={toggleBGColor}>Toggle Color</button>
        </div>
    );
}