import "../styles/page3.css";
import { useState } from "react";

export default function Page3(){
    const [number, setNumber] = useState(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    const [inputNum, setInputNum] = useState(0);
    const [headingMessage, setHeadingMessage] = useState<string>("Guess the number below!");
    const [resetButton, setResetButton] = useState(false);
    

    function updateInputNum(event: any){
        setInputNum(event.target.value);
    }

    function updateNumber(){
        setNumber(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
        setResetButton(false);
        setHeadingMessage("Guess the number below!");
        setInputNum(0);
    }

    
    function numCompare() {
        if(inputNum == number){
            setHeadingMessage("Congratulations! You guessed correctly!");
            setResetButton(true);
        }
        else if (inputNum > number){
            setHeadingMessage("Sorry; that is too High. Guess again");
        }
        else if(inputNum < number){
            setHeadingMessage("Sorry; that is too low. Guess again");
        }
        
    }

    return (
        <div className="pageDiv">
            <div>
                <h1 style={{fontSize: "40px"}}>Number Guessing Game</h1>
                <br>
                </br>
                <h2>The computer has generated a random number between 1 and 100. It is your job to guess the number.</h2>
                <br>
                </br>
                {/* <h1>{number}</h1> */}
                <h1>{headingMessage}</h1>
                <div>
                    <input type="number" value={inputNum} onChange={updateInputNum}></input>
                    <button className="actionButton submitButton" onClick={numCompare}>Enter Guess</button>
                    <button className="actionButton resetButton" onClick={updateNumber} disabled={!resetButton}>Reset</button>
                </div>
            </div>
        </div>
    );
}