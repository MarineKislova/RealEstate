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
              <a href="#1">About</a>
            </li>
            <li>
              <a href="#1">Services</a>
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
    <section className="hero-section">
      <div className="hero-section__content">
        <h1>Welcome to Our Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          tincidunt erat, vel aliquet nunc. Donec vel neque ac neque fermentum
          ultricies.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export { Header };
export default HeroSection;
