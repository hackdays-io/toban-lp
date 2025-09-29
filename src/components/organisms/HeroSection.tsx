export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <img
          src="assets/hero-image.png"
          alt="hero-image"
          className="hero-image"
        />
        <div className="hero-buttons">
          <a
            href="https://toban.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            開始する
          </a>
          <a href="#case-studies" className="btn-primary">
            事例を見る
          </a>
        </div>
      </div>
    </div>
  );
}
