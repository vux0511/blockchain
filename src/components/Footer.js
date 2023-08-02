import Logo from "../assets/images/logo.png";
import LogoDiscord from "../assets/images/discord.svg";
import LogoInstagram from "../assets/images/instagram.svg";
import LogoYoutube from "../assets/images/youtube.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <ul className="footer__list">
                    <li className="footer__item">
                        <img src={Logo} alt="Logo" className="footer__logo" />
                        <div className="footer__desc">
                            The best NFT marketplace website in the world and
                            feel your experience in selling or buy our work
                        </div>
                        <div className="footer__social">
                            <a href="" className="footer__link">
                                <img
                                    src={LogoYoutube}
                                    alt=""
                                    className="footer__social-youtube"
                                />
                            </a>
                            <a href="" className="footer__link">
                                <img
                                    src={LogoDiscord}
                                    alt=""
                                    className="footer__social-youtube"
                                />
                            </a>
                            <a href="" className="footer__link">
                                <img
                                    src={LogoInstagram}
                                    alt=""
                                    className="footer__social-youtube"
                                />
                            </a>
                        </div>
                    </li>
                    <li className="footer__item">
                        <div className="footer__title">About</div>
                        <a href="#" className="footer__link">
                            Product
                        </a>
                        <a href="#" className="footer__link">
                            Resource
                        </a>
                        <a href="#" className="footer__link">
                            Term &amp; Condition
                        </a>
                        <a href="#" className="footer__link">
                            FAQ
                        </a>
                    </li>
                    <li className="footer__item">
                        <div className="footer__title">Company</div>
                        <a href="#" className="footer__link">
                            Our Tea
                        </a>
                        <a href="#" className="footer__link">
                            Partner With Us
                        </a>
                        <a href="#" className="footer__link">
                            Term &amp; Condition
                        </a>
                        <a href="#" className="footer__link">
                            Features
                        </a>
                    </li>
                    <li className="footer__item">
                        <div className="footer__title">Contact</div>
                        <a href="#" className="footer__link">
                            +012 3456789
                        </a>
                        <a href="#" className="footer__link">
                            vux.0511@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
