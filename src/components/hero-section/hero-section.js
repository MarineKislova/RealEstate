const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="image/Logo.png" alt="" />
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#1">Home</a>
            </li>
            <li>
              <a href="#1">Listing</a>
            </li>
            <li>
              <a href="#1">Pages</a>
            </li>
            <li>
              <a href="#1">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__row-one">
          <h1 className="hero-section__content">Explore Our Verified Listings</h1>
          <p hero-section__content>There are plenty of location-specific and industry-specific business listing sites where you can submit your data.</p>
          <h4 className="hero-section__rating">Ratings <span>5.0</span></h4>
          <p className="hero-section__rating">Trusted by Clients From Worldwide</p>
          <a className="hero-section__contact" href="tel:+6530025656376">+65-3002 56 56 376</a>
          <p className="hero-section__contact">If you're in a hurry, quick call for us. We are here 24/7 to help you asap.</p>
        </div>
        <div className="hero-section__row-two">
          {/* <img src="image/hero.svg" alt="hero" /> */}
        </div>
        <div className="hero-section__row-three"></div>
      </div>
    </div>
  );
};

export { Header };
export default HeroSection;
