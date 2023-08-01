function About() {
    return (
        <section className="about">
            <div className="container about__container">
                <div className="about__info">
                    <div className="about__title">
                        The Premier Marketplace for NFTs
                    </div>
                    <div className="about__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </div>
                    <button className="about__button">Learn More</button>
                </div>
                <div className="about__image-list">
                    <img
                        src="https://cdn.dribbble.com/users/1787323/screenshots/17374479/media/b8500456e42a59d92be6338451e30bca.png?resize=640x480&vertical=center"
                        alt=""
                        className="about__image-item"
                    />
                    <img
                        src="https://cdn.dribbble.com/userupload/2444514/file/original-0158a9088a0d837beba3fbcc4a5b97a6.png?resize=477x358&vertical=center"
                        alt=""
                        className="about__image-item"
                    />
                    <img
                        src="https://cdn.dribbble.com/userupload/8917858/file/original-f077c372fbb4349cb99924ac8772dc5a.png?resize=752x564"
                        alt=""
                        className="about__image-item"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
