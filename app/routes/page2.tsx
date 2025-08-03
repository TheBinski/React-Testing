import "../styles/page2.css";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page2() {

    const [name, setName] = useState("");
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);

    const [finalStyle, setFinalStyle] = useState({
        color: 'white',
    });

    useEffect(() => {
        const newStyle = {
            color: rgbToHex(red, green, blue)
        };
        setFinalStyle(newStyle);
    }, [red, green, blue]);

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

     function updateGreen(event: any) {
        let newGreen = event.target.value;
        if (newGreen > 255 || newGreen < 0) {
            toast.error("Green input must be between 0 and 255");
            return;
        }
        setGreen(newGreen);
    }

     function udpateBlue(event: any) {
        let newBlue = event.target.value;
        if (newBlue > 255 || newBlue < 0) {
            toast.error("Blue input must be between 0 and 255");
            return;
        }
        setBlue(newBlue);
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
        </div>
        
    </div>
    );
}