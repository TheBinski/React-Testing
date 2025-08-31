import "../styles/page2.css";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page2() {

    const [name, setName] = useState("");
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);
    const [bRed, setBRed] = useState(0);
    const [bGreen, setBGreen] = useState(0);
    const [bBlue, setBBlue] = useState(0);
    const [toggleState, setToggleState] = useState(false);

    const [finalStyle, setFinalStyle] = useState({
        color: 'white',
        background: 'black',
    });

    useEffect(() => {
        const newStyle = {
            color: rgbToHex(red, green, blue),
            background: rgbToHex(bRed, bGreen, bBlue),
        };
        setFinalStyle(newStyle);
    }, [red, green, blue, bRed, bGreen, bBlue]);

    function rgbToHex(r: number, g: number, b: number) {
        let red = typeof(r) === 'string' ? parseInt(r) : r;
        let green = typeof(g) === 'string' ? parseInt(g) : g;
        let blue = typeof(b) === 'string' ? parseInt(b) : b;
        return '#' + convertToHex(red) + convertToHex(green) + convertToHex(blue);
    }

    function convertToHex(c: number) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function updateName(event: any) {
        setName(event.target.value);
    }

    function updateRed(event: any) {
        let newRed = event.target.value;
        if (newRed > 255 || newRed < 0) {
            toast.error("Red input must be between 0 and 255");
            return;
        }
        setRed(newRed);
    }
    function updateBRed(event: any) {
        let newBRed = event.target.value;
        if (newBRed > 255 || newBRed < 0) {
            toast.error("Red input must be between 0 and 255");
            return;
        }
        setBRed(newBRed);
    }

    function updateGreen(event: any) {
        let newGreen = event.target.value;
        if (newGreen > 255 || newGreen < 0) {
            toast.error("Green input must be between 0 and 255");
            return;
        }
        setGreen(newGreen);
    }

    function updateBGreen(event: any) {
        let newBGreen = event.target.value;
        if(newBGreen > 255 || newBGreen < 0) {
            toast.error("Green input must be between 0 and 255");
            return;
        }
        setBGreen(newBGreen);
    }

    function udpateBlue(event: any) {
        let newBlue = event.target.value;
        if (newBlue > 255 || newBlue < 0) {
            toast.error("Blue input must be between 0 and 255");
            return;
        }
        setBlue(newBlue);
    }

    function updateBBlue(event: any){
        let newBBlue = event.target.value;
        if(newBBlue > 255 || newBBlue < 0){
            toast.error("Blue input must be between 0 and 255");
            return;
        }
        setBBlue(newBBlue);
    }

    function handleToggle(event: any) {
        setToggleState(!toggleState);
    }

    return (
    <div className="page2-Content">
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <div className="FinalTextWrapper">
            <h1 className="FinalText" style={finalStyle}>{name ? name : "Please enter a Name..."}</h1>
        </div>
        <div className="InputForm">
            <div className="nameInputWrapper">
                <div className="settingsLabel">Name:</div>
                <input type="text" className="nameInput" value={name} onChange={updateName} placeholder="Type Name Here"></input>
            </div>
            <div className="fontColorInputWrapper">
                <div className="settingsLabel">Font Color Settings</div>
                <div className="inputNumberWrapper">
                    <div className="red">Red: </div>
                    <input type="number" className="redInput" value={red} onChange={updateRed}></input>
                </div>
                <div className="inputNumberWrapper">
                    <div className="green">Green: </div>
                    <input type="number" className="greenInput" value={green} onChange={updateGreen}></input>
                </div>
                <div className="inputNumberWrapper">
                    <div className="blue">Blue: </div>
                    <input type="number" className="blueInput" value={blue} onChange={udpateBlue}></input>
                </div>
            </div>
            <div className="backgrndColorInputWrapper">
                <div className="settingsLabel">Background Color Settings</div>
                <div className="inputNumberWrapper">
                    <div className="red">Red: </div>
                    <input type="number" className="redInput" value={bRed} onChange={updateBRed}></input>
                </div>
                <div className="inputNumberWrapper">
                    <div className="green">Green: </div>
                    <input type="number" className="greenInput" value={bGreen} onChange={updateBGreen}></input>
                </div>
                <div className="inputNumberWrapper">
                    <div className="blue">Blue: </div>
                    <input type="number" className="blueInput" value={bBlue} onChange={updateBBlue}></input>
                </div>
            </div>
        </div>
        <div className="toggleArea">
            <p>Current Toggle Value: {toggleState.toString()}</p>
            <button className="ToggleButton" onClick={handleToggle}>{toggleState ? "Off" : "On"}</button>
        </div>
    </div>
    );
}