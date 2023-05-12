import { Outlet, NavLink } from "react-router-dom";

function HeaderNav(){
    return (
        <header>
            <h1>My Amazing React Site</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderNav;