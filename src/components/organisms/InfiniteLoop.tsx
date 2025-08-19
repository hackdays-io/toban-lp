'use client';

import React, { useState, useEffect } from 'react';

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
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const logos = [
    'Comoris',
    '塩尻DAO',
    'ento',
    'ETH Tokyo',
    'Fracton',
    'Localcoop'
  ];

  const changeSpeed = (speed: number) => {
    setCurrentSpeed(speed);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div >
      
      <div 
        style={styles.containerScrollWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.scrollWrapper}>
          <div 
            style={{
              ...styles.logoTrack,
              animationDuration: `${currentSpeed}s`,
              animationPlayState: (isPaused || isHovered) ? 'paused' : 'running',
              gap: isMobile ? '40px' : '60px'
            }}
          >
            {/* 第1セット */}
            {logos.map((logo, index) => (
              <div 
                key={`first-${index}`}
                style={{
                  ...styles.logoItem,
                  ...(isMobile ? styles.logoItemMobile : {}),
                  ...getLogoItemColor(index)
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                {logo}
              </div>
            ))}
            
            {/* 第2セット（シームレスなループ用） */}
            {logos.map((logo, index) => (
              <div 
                key={`second-${index}`}
                style={{
                  ...styles.logoItem,
                  ...(isMobile ? styles.logoItemMobile : {}),
                  ...getLogoItemColor(index)
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div style={styles.controls}>
        <button 
          style={{
            ...styles.speedControl,
            ...(currentSpeed === 6 ? styles.speedControlActive : {})
          }}
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
          style={{
            ...styles.speedControl,
            ...(currentSpeed === 12 ? styles.speedControlActive : {})
          }}
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
          style={{
            ...styles.speedControl,
            ...(currentSpeed === 18 ? styles.speedControlActive : {})
          }}
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
          style={{
            ...styles.speedControl,
            ...(isPaused ? styles.speedControlActive : {})
          }}
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
      </div> */}
    </div>
  );
};

// カラーパターンを返す関数
const getLogoItemColor = (index: number) => {
  const colorIndex = index % 6;
  const colorPatterns = [
    { background: 'linear-gradient(45deg, #ff6b6b, #ee5a6f)', color: 'white' },
    { background: 'linear-gradient(45deg, #4ecdc4, #44a08d)', color: 'white' },
    { background: 'linear-gradient(45deg, #45b7d1, #96c93d)', color: 'white' },
    { background: 'linear-gradient(45deg, #f093fb, #f5576c)', color: 'white' },
    { background: 'linear-gradient(45deg, #ffecd2, #fcb69f)', color: '#333' },
    { background: 'linear-gradient(45deg, #a8edea, #fed6e3)', color: '#333' }
  ];
  
  return colorPatterns[colorIndex];
};

// スタイルオブジェクト
const styles: { [key: string]: React.CSSProperties } = {
  body: {
    margin: 0,
    padding: '40px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px 0',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  containerScrollWrapper: {
    width: '100%',
    maxWidth: '1200px',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    // borderRadius: '20px',
    padding: '20px 0',
    marginTop: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  scrollWrapper: {
    overflow: 'hidden',
    position: 'relative',
  },
  logoTrack: {
    display: 'flex',
    width: 'calc(200% + 60px)',
    animationName: 'scrollStep',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    gap: '60px',
    alignItems: 'center',
  },
  logoItem: {
    flexShrink: 0,
    height: '80px',
    width: '160px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#333',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
  },
  logoItemMobile: {
    width: '120px',
    height: '60px',
    fontSize: '14px',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: 300,
  },
  controls: {
    textAlign: 'center',
    marginTop: '30px',
  },
  speedControl: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  speedControlActive: {
    background: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
  },
};

export default InfiniteLoop;
