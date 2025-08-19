'use client';

import React, { useState, useEffect } from 'react';

export default function SecurityStack() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const protocols = [
    {
      name: 'Hats Protocol',
      logo: '/logo/hats-logo.png',
      role: '権限付与・剥奪を NFT 化',
      trust: '非転送型 ERC-1155。ロールは DAO が管理',
      link: 'https://docs.hatsprotocol.xyz',
      linkText: 'docs.hatsprotocol.xyz',
      color: '#ff6b6b',
      icon: '🎩'
    },
    {
      name: '0xSplits',
      logo: '/logo/splits-logo.png',
      role: '報酬の自動分配',
      trust: '監査済み & ハイパーストラクチャ',
      link: 'https://review.mirror.xyz',
      linkText: 'review.mirror.xyz',
      color: '#4ecdc4',
      icon: '💰'
    },
    {
      name: 'ENS',
      logo: '/logo/ens-mark-Blue.svg',
      role: '認識しやすい受取アドレス',
      trust: 'オープンソース／分散管理',
      link: 'https://ens.domains',
      linkText: 'ens.domains',
      color: '#45b7d1',
      icon: '🌐'
    }
  ];

  const securityFeatures = [
    { icon: '🔓', text: 'すべてオープンソース', color: '#ff6b6b' },
    { icon: '🛡️', text: 'スマートコントラクトはすべて監査済み', color: '#4ecdc4' },
    { icon: '⚔️', text: '複数コミュニティで実戦投入', color: '#45b7d1' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('security-stack');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="security-stack" style={{
      ...sectionStyle,
      padding: isMobile ? '60px 15px' : '80px 20px'
    }}>
      <div style={containerStyle}>
        {/* ヘッダー */}
        <div style={headerStyle}>
          <h2 style={{
            ...titleStyle,
            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 2.8rem)'
          }}>
            <span style={securityIconStyle}>🔒</span>
            セキュリティ &<br />
            <span style={highlightStyle}>プロトコルスタック</span>
          </h2>
        </div>

        {/* セキュリティ機能 */}
        <div style={{
          ...featuresContainerStyle,
          marginBottom: isMobile ? '40px' : '60px'
        }}>
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              style={{
                ...featureItemStyle,
                ...(isVisible ? { 
                  ...featureAnimationStyle, 
                  animationDelay: `${index * 0.2}s` 
                } : {}),
                padding: isMobile ? '15px 20px' : '20px 25px'
              }}
            >
              <span style={{
                ...featureIconStyle,
                fontSize: isMobile ? '1.5rem' : '2rem',
                filter: `drop-shadow(0 2px 4px ${feature.color}30)`
              }}>{feature.icon}</span>
              <span style={{
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* プロトコルカード */}
        <div style={{
          ...protocolGridStyle,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '20px' : '30px'
        }}>
          {protocols.map((protocol, index) => (
            <div 
              key={index}
              style={{
                ...protocolCardStyle,
                borderColor: hoveredCard === index ? protocol.color : '#e2e8f0',
                background: hoveredCard === index 
                  ? `linear-gradient(135deg, ${protocol.color}05 0%, ${protocol.color}15 100%)`
                  : 'white',
                transform: isVisible 
                  ? hoveredCard === index 
                    ? 'translateY(-8px) scale(1.02)' 
                    : 'translateY(0)' 
                  : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease ${index * 0.2}s`,
                padding: isMobile ? '25px 20px' : '35px 30px'
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
            >
              {/* ロゴとタイトル */}
              <div style={protocolHeaderStyle}>
                <div style={{
                  ...logoContainerStyle,
                  backgroundColor: hoveredCard === index ? `${protocol.color}15` : '#f8f9fa'
                }}>
                  <img 
                    src={protocol.logo} 
                    alt={protocol.name}
                    style={{
                      ...logoStyle,
                      width: isMobile ? '60px' : '80px',
                      filter: hoveredCard === index ? 'brightness(1.1)' : 'none'
                    }}
                  />
                </div>
                <h3 style={{
                  ...protocolTitleStyle,
                  color: hoveredCard === index ? 'white' : '#1e293b',
                  fontSize: isMobile ? '1.3rem' : '1.5rem'
                }}>{protocol.name}</h3>
              </div>

              {/* 役割 */}
              <div style={{
                ...roleContainerStyle,
                marginBottom: isMobile ? '15px' : '20px'
              }}>
                <div style={{
                  ...labelStyle,
                  backgroundColor: protocol.color,
                  fontSize: isMobile ? '0.8rem' : '0.9rem'
                }}>
                  Toban での役割
                </div>
                <p style={{
                  ...roleTextStyle,
                  color: hoveredCard === index ? 'white' : '#475569',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>{protocol.role}</p>
              </div>

              {/* 信頼ポイント */}
              <div style={trustContainerStyle}>
              <div style={{
                  ...labelStyle,
                  backgroundColor: '#64748b',
                  fontSize: isMobile ? '0.8rem' : '0.9rem'
                }}>
                  信頼ポイント
                </div>
                <p style={{
                  ...trustTextStyle,
                  color: hoveredCard === index ? 'white' : '#475569',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  {protocol.trust}{' '}
                  <a 
                    href={protocol.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      ...linkStyle,
                      color: hoveredCard === index ? 'white' : protocol.color
                    }}
                  >
                    {protocol.linkText}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: '80px 20px',
  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  color: 'white',
  position: 'relative',
  overflow: 'hidden'
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  position: 'relative'
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '60px'
};

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
  fontWeight: '700',
  margin: 0,
  lineHeight: 1.2
};

const securityIconStyle: React.CSSProperties = {
  display: 'inline-block',
  marginRight: '15px',
  fontSize: '2.5rem',
  filter: 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.4))'
};

const highlightStyle: React.CSSProperties = {
  background: 'linear-gradient(120deg, #ffd700, #ff6b6b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
};

const featuresContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  alignItems: 'center'
};

const featureItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  padding: '20px 25px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '50px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  opacity: 0,
  transform: 'translateY(20px)',
  maxWidth: '600px',
  width: '100%'
};

const featureAnimationStyle: React.CSSProperties = {
  animation: 'slideInRight 0.8s ease-out forwards'
};

const featureIconStyle: React.CSSProperties = {
  fontSize: '2rem'
};

const protocolGridStyle: React.CSSProperties = {
  alignItems: 'stretch'
};

const protocolCardStyle: React.CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '35px 30px',
  border: '2px solid #e2e8f0',
  color: '#1e293b',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  position: 'relative'
};

const protocolHeaderStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '30px'
};

const logoContainerStyle: React.CSSProperties = {
  width: '120px',
  height: '120px',
  borderRadius: '20px',
  backgroundColor: '#f8f9fa',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  transition: 'all 0.3s ease'
};

const logoStyle: React.CSSProperties = {
  width: '80px',
  height: 'auto',
  maxHeight: '80px',
  objectFit: 'contain'
};

const protocolTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '700',
  margin: 0,
  transition: 'color 0.3s ease'
};

const roleContainerStyle: React.CSSProperties = {
  marginBottom: '20px'
};

const trustContainerStyle: React.CSSProperties = {
  marginBottom: 0
};

const labelStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '600',
  color: 'white',
  marginBottom: '10px'
};

const roleTextStyle: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: 1.6,
  margin: 0,
  color: '#475569'
};

const trustTextStyle: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: 1.6,
  margin: 0,
  color: '#475569'
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  fontWeight: '600',
  transition: 'opacity 0.3s ease'
};