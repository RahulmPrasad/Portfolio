import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-content">
        {/* Profile Image */}
        <div className="profile-container">
          <img
            src="https://avatar.iran.liara.run/public/30" // Placeholder, user can replace with their image
            alt="Rahul Prasad"
            className="profile-img"
          />
        </div>

        {/* Available Badge */}
        <div className="available-badge">
          <span className="dot"></span>
          Available Now
        </div>

        {/* Greeting */}
        <h3 className="hero-greeting">Hello, I'm Rahul Prasad</h3>

        {/* Main Headline */}
        <h1 className="hero-headline">
          Not just user <span className="serif-italic">friendly!</span>
          <br />
          Its user <span className="serif-italic">certified.</span>
        </h1>

        {/* Experience Indicator */}
        <div className="experience-badge">
          <span className="orange-dot"></span>
          3+ Years of Experience
        </div>

        {/* Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Let's Talk <span className="arrow">↗</span>
          </a>
          <a href="/resume.pdf" className="btn-secondary">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}