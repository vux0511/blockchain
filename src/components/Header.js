import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

function Header() {
    const menuToggle = () => {
        const menuToggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".header__menu");

        if (!menuToggle || !menu) return;
        menuToggle.addEventListener("click", function () {
            menu.classList.add("is-active");
        });
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
                menu.classList.remove("is-active");
            }
        });
    };

    return (
        <header className="header">
            <div className="header__list">
                <img src={Logo} alt="Logo" className="header__logo" />
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
                        <AiOutlineSearch className="header__icon-cart" />
                        <AiOutlineShoppingCart className="header__icon-cart" />
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
                {/* <i className="fa-solid fa-bars-staggered menu-toggle" /> */}
                <RiMenu3Fill onClick={menuToggle} className="menu-toggle" />
            </div>
        </header>
    );
}

export default Header;
