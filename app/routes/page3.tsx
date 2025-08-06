import { useState } from "react";

export default function Page3(){
    const [number, setNumber] = useState(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    const [inputNum, setInputNum] = useState(0);

    function updateInputNum(event: any){
        setInputNum(event.target.value);
    }

    function numCompare() {
        console.log(inputNum);
        console.log(number);
        let newNum = inputNum;
        
    }

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={inputNum} onChange={updateInputNum}></input>
                <button onClick={numCompare}>Enter Guess</button>
            </div>
        </div>
    );
}