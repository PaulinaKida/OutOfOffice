import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = function() {
    return(
        <>
            <header className="header">
                <div className="main-left">
                </div>
                <div className="main-right">
                </div>
                <div className="header__container container">
                    <nav>
                        <input type="checkbox" className="menu__btn" id="menu__btn" />
                        <label htmlFor="menu__btn" className="menu__toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <ul className="header__nav">
                            <li className="nav__element"><NavLink to="/#omnie" className={isActive =>"nav__link" + (!isActive ? "" : "")} >poznaj nas</NavLink></li>
                            <li className="nav__element"><NavLink to="/#oferta" className={isActive =>"nav__link" + (!isActive ? "" : "")}>oferta</NavLink></li>
                            <li className="nav__element"><NavLink to="/#dotyczasowawspolpraca" className={isActive =>"nav__link" + (!isActive ? "" : "")}>współpraca</NavLink></li>
                            <li className="nav__element"><NavLink to="/#contact" className={isActive =>"nav__link" + (!isActive ? "" : "")}>kontakt</NavLink></li>

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Menu;
