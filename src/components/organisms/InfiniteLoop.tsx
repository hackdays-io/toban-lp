"use client";

import type React from "react";
import { useState, useEffect } from "react";

const InfiniteLoop: React.FC = () => {
  const [currentSpeed, setCurrentSpeed] = useState(12);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // レスポンシブ対応のためのウィンドウサイズ検出
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // CSSアニメーションの動的生成
  useEffect(() => {
    const stepWidth = isMobile ? 160 : 220; // logo width + gap
    
    const keyframes = `
      @keyframes scrollStep {
        0% { transform: translateX(0); }
        8.33% { transform: translateX(calc(-${stepWidth}px * 1)); }
        16.66% { transform: translateX(calc(-${stepWidth}px * 1)); }
        25% { transform: translateX(calc(-${stepWidth}px * 2)); }
        33.33% { transform: translateX(calc(-${stepWidth}px * 2)); }
        41.66% { transform: translateX(calc(-${stepWidth}px * 3)); }
        50% { transform: translateX(calc(-${stepWidth}px * 3)); }
        58.33% { transform: translateX(calc(-${stepWidth}px * 4)); }
        66.66% { transform: translateX(calc(-${stepWidth}px * 4)); }
        75% { transform: translateX(calc(-${stepWidth}px * 5)); }
        83.33% { transform: translateX(calc(-${stepWidth}px * 5)); }
        91.66% { transform: translateX(calc(-${stepWidth}px * 6)); }
        100% { transform: translateX(calc(-${stepWidth}px * 6)); }
      }
    `;

    // 既存のスタイルタグを削除
    const existingStyle = document.getElementById('infinite-loop-keyframes');
    if (existingStyle) {
      existingStyle.remove();
    }

    // 新しいスタイルタグを追加
    const style = document.createElement('style');
    style.id = 'infinite-loop-keyframes';
    style.textContent = keyframes;
    document.head.appendChild(style);

    return () => {
      const styleToRemove = document.getElementById('infinite-loop-keyframes');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, [isMobile]);

  const logos = [
    "Comoris",
    "塩尻DAO", 
    "ento",
    "ETH Tokyo",
    "Fracton",
    "Localcoop",
  ];

  const changeSpeed = (speed: number) => {
    setCurrentSpeed(speed);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleMouseEnter = () => {
    if (!isPaused) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // カラーパターンを返す関数
  const getLogoItemColor = (index: number) => {
    const colorIndex = index % 6;
    const colorPatterns = [
      { background: "linear-gradient(45deg, #ff6b6b, #ee5a6f)", color: "white" },
      { background: "linear-gradient(45deg, #4ecdc4, #44a08d)", color: "white" },
      { background: "linear-gradient(45deg, #45b7d1, #96c93d)", color: "white" },
      { background: "linear-gradient(45deg, #f093fb, #f5576c)", color: "white" },
      { background: "linear-gradient(45deg, #ffecd2, #fcb69f)", color: "#333" },
      { background: "linear-gradient(45deg, #a8edea, #fed6e3)", color: "#333" },
    ];

    return colorPatterns[colorIndex];
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "40px 0",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    position: "relative",
    margin: "0 auto",
  };

  const scrollWrapperStyle: React.CSSProperties = {
    overflow: "hidden",
    position: "relative",
  };

  const logoTrackStyle: React.CSSProperties = {
    display: "flex",
    width: isMobile ? "calc(200% + 40px)" : "calc(200% + 60px)",
    animation: `scrollStep ${currentSpeed}s linear infinite`,
    animationPlayState: isPaused || isHovered ? "paused" : "running",
    gap: isMobile ? "40px" : "60px",
    alignItems: "center",
  };

  const logoItemStyle: React.CSSProperties = {
    flexShrink: 0,
    height: isMobile ? "60px" : "80px",
    width: isMobile ? "120px" : "160px",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: isMobile ? "14px" : "18px",
    color: "#333",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    position: "relative",
  };

  const controlsStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "30px",
  };

  const speedControlStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    color: "white",
    padding: "10px 20px",
    margin: "0 10px",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  };

  const speedControlActiveStyle: React.CSSProperties = {
    ...speedControlStyle,
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
  };

  return (
    <div className="infinite-loop-container">
      <div
        className="container"
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={scrollWrapperStyle}>
          <div
            className="logo-track"
            style={logoTrackStyle}
          >
            {/* 第1セット */}
            {logos.map((logo, index) => (
              <div
                key={`first-${logo}-${index}`}
                style={{
                  ...logoItemStyle,
                  ...getLogoItemColor(index),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                {logo}
              </div>
            ))}

            {/* 第2セット（シームレスなループ用） */}
            {logos.map((logo, index) => (
              <div
                key={`second-${logo}-${index}`}
                style={{
                  ...logoItemStyle,
                  ...getLogoItemColor(index),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* コントロールボタン（コメントアウト解除すると表示されます） */}
      {/* 
      <div style={controlsStyle}>
        <button 
          style={currentSpeed === 6 ? speedControlActiveStyle : speedControlStyle}
          onClick={() => changeSpeed(6)}
          onMouseEnter={(e) => {
            if (currentSpeed !== 6) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentSpeed !== 6) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          高速
        </button>
        <button 
          style={currentSpeed === 12 ? speedControlActiveStyle : speedControlStyle}
          onClick={() => changeSpeed(12)}
          onMouseEnter={(e) => {
            if (currentSpeed !== 12) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentSpeed !== 12) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          標準
        </button>
        <button 
          style={currentSpeed === 18 ? speedControlActiveStyle : speedControlStyle}
          onClick={() => changeSpeed(18)}
          onMouseEnter={(e) => {
            if (currentSpeed !== 18) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentSpeed !== 18) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          低速
        </button>
        <button 
          style={isPaused ? speedControlActiveStyle : speedControlStyle}
          onClick={togglePause}
          onMouseEnter={(e) => {
            if (!isPaused) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isPaused) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          {isPaused ? '再生' : '一時停止'}
        </button>
      </div>
      */}
    </div>
  );
};

export default InfiniteLoop;