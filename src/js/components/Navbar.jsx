import React from "react";


//create your first component
export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
            <div className="container bg-dark">
                <a className="navbar-brand text-light">Start Bootstrap</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <a className="nav-link fs-6 text-light" aria-current="page" href="#">Home</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

