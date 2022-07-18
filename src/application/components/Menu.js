import React from 'react';

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
                            <li className="nav__element"><a href="#omnie" className="nav__link">poznaj nas</a></li>
                            <li className="nav__element"><a href="#oferta" className="nav__link">oferta</a></li>
                            <li className="nav__element"><a href="#dotyczasowawspolpraca" className="nav__link">współpraca</a></li>
                            <li className="nav__element"><a href="#contact" className="nav__link">kontakt</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Menu;
