import {React, useState, useEffect} from 'react';

export default function Calculation(){
    const [number, setNumber] = useState(1);
    const [calculation, setCalculation] = useState(1);
    /*
    function addOneToNumber(){
        setNumber(number + 1);
    }
    */
    const addOneToNumber = () => { setNumber(number + 1); }
    //const addOneToNumber = () => setNumber((n) => n + 1);
    
    useEffect(() => {
        setCalculation(() => number * 2);
    }, [number]);

    return (
        <div>
            <p>Calculation Example:</p>
            <p>The number is: {number}</p>
            <button onClick={addOneToNumber}>Increase Number</button>
            <p>The number * 2 is: {calculation}</p>
        </div>
    )
}