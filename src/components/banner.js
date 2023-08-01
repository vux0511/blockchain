import BannerImg from "../assets/images/banner.png";

function Banner() {
    return (
        <section className="banner">
            <div className="container banner__container">
                <div className="bannner__info">
                    <div className="banner__heading">
                        <h1>
                            Create, Sell &amp; Collect Your Own Creative
                            <span>NFT</span>
                        </h1>
                    </div>
                    <div className="banner__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit.
                    </div>
                    <div className="banner__button">
                        <a
                            href="#"
                            className="button banner__button-space button-primary"
                        >
                            Explore Now
                        </a>
                        <a
                            href="#"
                            className="button banner__button-space button-transparent"
                        >
                            Sell NFT
                        </a>
                    </div>
                </div>
                <img src={BannerImg} alt="Banner" className="banner__image" />
            </div>
        </section>
    );
}

export default Banner;
