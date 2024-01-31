import "./navbar.css";

const Navbar = () => {
    return(
        <div className="navbar">
        <div className="navcontainer">
        <span className="logo">logo</span>
        <div className="navitems">
        <button className="navbutton">register</button>
        <button className="navbutton">login</button>
        </div>
        </div>
        </div>

    )
};

export default Navbar;