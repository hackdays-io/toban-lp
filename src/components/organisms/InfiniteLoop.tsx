import React, { useState } from 'react';

interface LogoItem {
  name: string;
  logo?: string;
}

const InfiniteLoop: React.FC = () => {
  const [currentSpeed, setCurrentSpeed] = useState(12);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const logoItems: LogoItem[] = [
    { name: 'Orange DAO' },
    { name: 'Safe' },
    { name: 'Raid Guild' },
    { name: 'Green Pill' },
    { name: 'Myosin' },
    { name: 'Optimism' },
  ];

  const handleSpeedChange = (speed: number) => {
    setCurrentSpeed(speed);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const containerClasses = `
    infinite-loop-container
    ${isPaused || isHovered ? 'paused' : ''}
  `.trim();

  return (
    <div >      
      <div 
        className={containerClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="scroll-wrapper">
          <div 
            className="logo-track"
            style={{ animationDuration: `${currentSpeed}s` }}
          >
            {/* 第1セット */}
            {logoItems.map((item, index) => (
              <div key={`first-${index}`} className="logo-item">
                {item.name}
              </div>
            ))}
            
            {/* 第2セット（シームレスなループ用） */}
            {logoItems.map((item, index) => (
              <div key={`second-${index}`} className="logo-item">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .infinite-loop-wrapper {
          width: 100%;
          padding: 40px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: 'Arial', sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .infinite-loop-container {
          width: 100%;
          max-width: 1200px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .scroll-wrapper {
          overflow: hidden;
          position: relative;
        }

        .logo-track {
          display: flex;
          width: calc(200% + 60px);
          animation: scrollStep 12s linear infinite;
          gap: 60px;
          align-items: center;
        }

        .logo-item {
          flex-shrink: 0;
          height: 80px;
          width: 160px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          color: #333;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .logo-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        /* カラーパターン */
        .logo-item:nth-child(6n+1) { 
          background: linear-gradient(45deg, #ff6b6b, #ee5a6f); 
          color: white; 
        }
        .logo-item:nth-child(6n+2) { 
          background: linear-gradient(45deg, #4ecdc4, #44a08d); 
          color: white; 
        }
        .logo-item:nth-child(6n+3) { 
          background: linear-gradient(45deg, #45b7d1, #96c93d); 
          color: white; 
        }
        .logo-item:nth-child(6n+4) { 
          background: linear-gradient(45deg, #f093fb, #f5576c); 
          color: white; 
        }
        .logo-item:nth-child(6n+5) { 
          background: linear-gradient(45deg, #ffecd2, #fcb69f); 
          color: #333; 
        }
        .logo-item:nth-child(6n) { 
          background: linear-gradient(45deg, #a8edea, #fed6e3); 
          color: #333; 
        }

        @keyframes scrollStep {
          0% {
            transform: translateX(0);
          }
          8.33% {
            transform: translateX(calc(-220px * 1));
          }
          16.66% {
            transform: translateX(calc(-220px * 1));
          }
          25% {
            transform: translateX(calc(-220px * 2));
          }
          33.33% {
            transform: translateX(calc(-220px * 2));
          }
          41.66% {
            transform: translateX(calc(-220px * 3));
          }
          50% {
            transform: translateX(calc(-220px * 3));
          }
          58.33% {
            transform: translateX(calc(-220px * 4));
          }
          66.66% {
            transform: translateX(calc(-220px * 4));
          }
          75% {
            transform: translateX(calc(-220px * 5));
          }
          83.33% {
            transform: translateX(calc(-220px * 5));
          }
          91.66% {
            transform: translateX(calc(-220px * 6));
          }
          100% {
            transform: translateX(calc(-220px * 6));
          }
        }

        .infinite-loop-title {
          text-align: center;
          color: white;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: 300;
        }

        .controls {
          text-align: center;
          margin-top: 30px;
        }

        .speed-control {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          padding: 10px 20px;
          margin: 0 10px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .speed-control:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .speed-control.active {
          background: rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        /* 一時停止状態 */
        .paused .logo-track {
          animation-play-state: paused;
        }

        /* モバイル対応 */
        @media (max-width: 768px) {
          .infinite-loop-wrapper {
            padding: 20px 10px;
            min-height: 300px;
          }

          .infinite-loop-container {
            padding: 20px 0;
          }

          .logo-item {
            width: 120px;
            height: 60px;
            font-size: 14px;
          }
          
          .logo-track {
            gap: 40px;
          }

          .infinite-loop-title {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .speed-control {
            padding: 8px 16px;
            margin: 0 5px;
            font-size: 14px;
          }
          
          @keyframes scrollStep {
            0% { transform: translateX(0); }
            8.33% { transform: translateX(calc(-160px * 1)); }
            16.66% { transform: translateX(calc(-160px * 1)); }
            25% { transform: translateX(calc(-160px * 2)); }
            33.33% { transform: translateX(calc(-160px * 2)); }
            41.66% { transform: translateX(calc(-160px * 3)); }
            50% { transform: translateX(calc(-160px * 3)); }
            58.33% { transform: translateX(calc(-160px * 4)); }
            66.66% { transform: translateX(calc(-160px * 4)); }
            75% { transform: translateX(calc(-160px * 5)); }
            83.33% { transform: translateX(calc(-160px * 5)); }
            91.66% { transform: translateX(calc(-160px * 6)); }
            100% { transform: translateX(calc(-160px * 6)); }
          }
        }

        /* スマートフォン対応 */
        @media (max-width: 480px) {
          .infinite-loop-wrapper {
            padding: 15px 5px;
          }

          .logo-item {
            width: 100px;
            height: 50px;
            font-size: 12px;
          }
          
          .logo-track {
            gap: 30px;
          }

          .infinite-loop-title {
            font-size: 18px;
          }

          .controls {
            margin-top: 20px;
          }

          .speed-control {
            padding: 6px 12px;
            margin: 0 3px;
            font-size: 12px;
          }

          @keyframes scrollStep {
            0% { transform: translateX(0); }
            8.33% { transform: translateX(calc(-130px * 1)); }
            16.66% { transform: translateX(calc(-130px * 1)); }
            25% { transform: translateX(calc(-130px * 2)); }
            33.33% { transform: translateX(calc(-130px * 2)); }
            41.66% { transform: translateX(calc(-130px * 3)); }
            50% { transform: translateX(calc(-130px * 3)); }
            58.33% { transform: translateX(calc(-130px * 4)); }
            66.66% { transform: translateX(calc(-130px * 4)); }
            75% { transform: translateX(calc(-130px * 5)); }
            83.33% { transform: translateX(calc(-130px * 5)); }
            91.66% { transform: translateX(calc(-130px * 6)); }
            100% { transform: translateX(calc(-130px * 6)); }
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteLoop;
