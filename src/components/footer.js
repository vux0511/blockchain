function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <ul className="footer__list">
                    <li className="footer__item">
                        <img
                            src="images/logo.png"
                            alt="Logo"
                            className="footer__logo"
                        />
                        <div className="footer__desc">
                            The best NFT marketplace website in the world and
                            feel your experience in selling or buy our work
                        </div>
                        <div className="footer__social">
                            <img
                                src="images/youtube.svg"
                                alt=""
                                className="footer__social-youtube"
                            />
                            <img
                                src="images/discord.svg"
                                alt=""
                                className="footer__social-discord"
                            />
                            <img
                                src="images/instagram.svg"
                                alt=""
                                className="footer__social-instagram"
                            />
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
                            Our Team
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
