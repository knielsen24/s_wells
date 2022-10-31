import { useState } from "react";
import listIcon from "../assets/list-icon.svg"

function Navbar() {
    const [changeBackground, setChangeBackground] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 10) {
            setChangeBackground(true);
        } else {
            setChangeBackground(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    const navMenuLinks = changeBackground
        ? "nav-link text-white"
        : "nav-link text-dark";

    return (
        <div
            className={changeBackground ? "navbar navbar-bg" : "navbar"}
            onMouseEnter={() => setChangeBackground(true)}
            onMouseLeave={() => setChangeBackground(false)}
        >
            <nav className=" container navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <a
                        className={
                            changeBackground
                                ? "navbar-brand float-lg-start text-white"
                                : "navbar-brand float-sm-center text-dark"
                        }
                        href="#"
                    >
                        300 South Wells
                    </a>
                    <button
                        className="navbar-toggler border-0 "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <img src={listIcon} width="10px" ></img> */}
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav ms-auto align-items-center ">
                            <li className="nav-item">
                                <a
                                    className={navMenuLinks}
                                    aria-current="page"
                                    href="#"
                                >
                                    Information
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={navMenuLinks} href="#">
                                    The Courtyard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={navMenuLinks} href="#">
                                    Lease a space
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={navMenuLinks} href="#">
                                    Contact
                                </a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tenants
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
