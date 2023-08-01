import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function Header() {
    return (
        <header className="header">
            <div className="header__list">
                <img src={Logo} alt="Logo" classname="header__logo" srcset="" />
                <ul className="header__menu">
                    <li className="header__item">
                        <Link to="marketplace" className="header__link">
                            {" "}
                            Marketplace{" "}
                        </Link>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">
                            {" "}
                            Collections{" "}
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">
                            {" "}
                            Creators{" "}
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">
                            {" "}
                            Stats{" "}
                        </a>
                    </li>
                    <div className="header__icon">
                        <ion-icon
                            name="search-outline"
                            className="header__icon-search"
                        />
                        <ion-icon
                            name="cart-outline"
                            className="header__icon-cart"
                        />
                    </div>
                    <li className="header__item">
                        <div className="header__button">
                            <a href="#" className="button button-primary">
                                Create
                            </a>
                            <a href="#" className="button button-primary">
                                Connect Wallet
                            </a>
                        </div>
                    </li>
                </ul>
                <i className="fa-solid fa-bars-staggered menu-toggle" />
            </div>
        </header>
    );
}

export default Header;
