import React from 'react';
import "./style.scss"
import logo from "../../../image/sezam-logo.jpg"
import BurgerMenu from "./burgerMenu/burgerMenu.jsx";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="box-img">
                    <img src={logo} alt=""/>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="sezam-react/src/assets/components/header/navBar#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sezam-react/src/assets/components/header/navBar#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sezam-react/src/assets/components/header/navBar#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sezam-react/src/assets/components/header/navBar#">Galera</a>
                        </li>


                    </ul>
                </div>
                <BurgerMenu />
            </div>
        </nav>

    );
};

export default NavBar;