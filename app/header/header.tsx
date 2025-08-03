export function Header() {

    function handleClick() {
        alert("Header button has been clicked!");
    };

    return (
        <div className="HeaderContainer">
            <a className="Header-Header">I am the Header!</a>
            <div>
                <input className="header-searchBar" type="text" placeholder="Fake Search Bar"></input>
            </div>
            <div>
                <button onClick={handleClick} className="header-button">Click Me!</button>
                <button className="header-button">Home</button>
                <button className="header-button">Other Page</button>
            </div>
        </div>
    );
}