import { useEffect, useState } from "react";
import { RoutingButton } from "~/routing-button/routing-button";

export function Header() {
    
    const [headerText, setHeaderText] = useState("I am the Header!");

    useEffect(() => {
         const handleSessionUpdate = () => {
            const storedData = sessionStorage.getItem("HeaderName");
            if (storedData) {
                let newHeaderJSON = JSON.parse(storedData);
                let newHeaderText = newHeaderJSON.name ? newHeaderJSON.name : "I am the Header!";
                console.log(newHeaderJSON);
                console.log(newHeaderText);
                setHeaderText(newHeaderText);
            } else {
                setHeaderText("I am the Header!");
            }
        };

        window.addEventListener('session-updated', handleSessionUpdate);

        return () => {
          window.removeEventListener('session-updated', handleSessionUpdate);
        };
    }, []);

    function handleClick() {
        alert("Header button has been clicked!");
    };

    return (
        <div className="HeaderContainer">
            <RoutingButton buttonClassName="Header-Header" routeTo="/" buttonText={headerText}/>
            <div>
                <input className="header-searchBar" type="text" placeholder="Fake Search Bar"></input>
            </div>
            <div>
                <button onClick={handleClick} className="header-button">Click Me!</button>
                <RoutingButton buttonClassName="header-button" routeTo="/" buttonText="Home"/>
                <RoutingButton buttonClassName="header-button" routeTo="/page2" buttonText="Other Page"/>
            </div>
        </div>
    );
}