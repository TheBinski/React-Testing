import { RoutingButton } from "~/routing-button/routing-button";

export function Header() {

    function handleClick() {
        alert("Header button has been clicked!");
    };

    return (
        <div className="HeaderContainer">
            <RoutingButton buttonClassName="Header-Header" routeTo="/" buttonText="I am the Header!"/>
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