export default function HeroSection() {
    return (
      <div className="hero">
        <div className="hero-content">
          <img src="/hero-image.png" alt="hero-image" className="hero-image" />
          <div className="hero-buttons">
            <button className="btn-primary">開始する</button>
            <button className="btn-primary">事例を見る</button>
          </div>
        </div>
      </div>
    );
  }