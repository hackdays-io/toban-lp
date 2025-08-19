'use client';

import React, { useState, useEffect } from 'react';

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const steps = [
    {
      number: '01',
      title: 'サインイン、ワークスペース参加',
      description: 'ウォレット、ガス代なしで利用開始\n誰かから役割かアシストクレジットをもらうと自動的に参加',
      image: '/HowItWorksImage/HowItWorks1.png',
      color: '#ff6b6b'
    },
    {
      number: '02',
      title: '役割の確認',
      description: 'やるべきことや権限・権利を確認\n他にだれがどんな役割をもっているか見える',
      image: '/HowItWorksImage/HowItWorks2.png',
      color: '#4ecdc4'
    },
    {
      number: '03',
      title: 'アシストクレジットのやりとり',
      description: '助けてもらったとき\n気づきをもらったとき\nただ渡したいとき',
      images: ['/HowItWorksImage/HowItWorks3-1.png', '/HowItWorksImage/HowItWorks3-2.png'],
      color: '#45b7d1'
    },
    {
      number: '04',
      title: '分配コントラクトの作成',
      description: '報酬分配をしたい役割を選択\n報酬分配率はアルゴリズムで自動計算',
      image: '/HowItWorksImage/HowItWorks4.png',
      color: '#96c93d'
    },
    {
      number: '05',
      title: '報酬の分配',
      description: 'ERC20、ネイティブトークンを分配コントラクトに送金\n1回のトランザクションで一気に分配',
      image: '/HowItWorksImage/HowItWorks5.png',
      color: '#f39c12'
    }
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

    const element = document.getElementById('how-it-works');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !isMobile) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, steps.length, isMobile]);

  return (
    <section id="how-it-works" style={{
      ...sectionStyle,
      padding: isMobile ? '60px 15px' : '80px 20px'
    }}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={{
            ...titleStyle,
            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 2.8rem)'
          }}>
            導入も、運用も、<br />
            <span style={highlightStyle}>シンプル</span>です
          </h2>
        </div>

        {/* ステップ表示 */}
        <div style={{
          ...stepsStyle,
          display: isMobile ? 'flex' : 'grid',
          flexDirection: isMobile ? 'column' : 'row',
          gridTemplateColumns: isMobile ? 'none' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '0' : '20px',
          marginBottom: isMobile ? '30px' : '40px',
          justifyContent: 'center'
        }}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* カード */}
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
              }}>
                <div 
                  style={{
                    ...stepCardStyle,
                    backgroundColor: currentStep === index && !isMobile ? step.color + '20' : 'white',
                    borderColor: currentStep === index && !isMobile ? step.color : '#e2e8f0',
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s ease ${index * 0.2}s`,
                    padding: isMobile ? '20px' : '25px 20px',
                    minHeight: isMobile ? 'auto' : '500px',
                    width: '100%',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                >
                  {/* 画像セクション */}
                  <div style={{
                    width: '100%',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: isMobile ? '200px' : '250px'
                  }}>
                    {step.image ? (
                      <img 
                        src={step.image} 
                        alt={step.title}
                        onClick={() => setModalImage(step.image)}
                        style={{
                          maxWidth: '100%',
                          maxHeight: isMobile ? '200px' : '250px',
                          objectFit: 'contain',
                          borderRadius: '10px',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
                        }}
                      />
                    ) : step.images ? (
                      <div style={{
                        display: 'flex',
                        gap: '15px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        width: '100%'
                      }}>
                        {step.images.map((img: string, imgIndex: number) => (
                          <img 
                            key={imgIndex}
                            src={img} 
                            alt={`${step.title} ${imgIndex + 1}`}
                            onClick={() => setModalImage(img)}
                            style={{
                              maxWidth: isMobile ? '45%' : '180px',
                              maxHeight: isMobile ? '150px' : '200px',
                              objectFit: 'contain',
                              borderRadius: '8px',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                              cursor: 'pointer',
                              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.02)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
                            }}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* ステップ番号 */}
                  <div style={{
                    ...stepNumberStyle,
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    marginBottom: '10px',
                    color: step.color,
                    fontWeight: '700'
                  }}>{step.number}</div>

                  {/* コンテンツセクション */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      ...stepTitleStyle,
                      color: currentStep === index && !isMobile ? step.color : '#1e293b',
                      fontSize: isMobile ? '1.1rem' : '1.2rem',
                      lineHeight: 1.3,
                      marginBottom: '12px'
                    }}>
                      {step.title}
                    </h3>
                    
                    <p style={{
                      ...stepDescriptionStyle,
                      color: currentStep === index && !isMobile ? 'white' : '#64748b',
                      fontSize: isMobile ? '0.85rem' : '0.9rem',
                      whiteSpace: 'pre-line',
                      lineHeight: 1.5
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* デスクトップ用矢印（最後のステップ以外） */}
                {index < steps.length - 1 && !isMobile && (
                  <div style={arrowStyle}>
                    <div style={{
                      ...arrowIconStyle,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                      transition: `all 0.6s ease ${index * 0.2 + 0.3}s`
                    }}>
                      →
                    </div>
                  </div>
                )}
              </div>

              {/* モバイル用矢印（カードの外側、独立したブロック） */}
              {index < steps.length - 1 && isMobile && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  margin: '30px 0',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    color: 'white',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                    transition: `all 0.6s ease ${index * 0.2 + 0.5}s`,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}>
                    ↓
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* プログレスバー（デスクトップのみ） */}
        {!isMobile && (
          <div style={progressContainerStyle}>
            <div style={progressBarStyle}>
              <div style={{
                ...progressFillStyle,
                width: `${((currentStep + 1) / steps.length) * 100}%`
              }} />
            </div>
            <div style={progressTextStyle}>
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
        )}

        {/* 画像拡大モーダル */}
        {modalImage && (
          <div 
            style={modalOverlayStyle}
            onClick={() => setModalImage(null)}
          >
            <div 
              style={modalContentStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={modalCloseButtonStyle}
                onClick={() => setModalImage(null)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f0f0';
                  e.currentTarget.style.color = '#333';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#666';
                }}
              >
                ×
              </button>
              <img
                src={modalImage}
                alt="拡大表示"
                style={modalImageStyle}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: '80px 20px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  overflow: 'hidden'
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%'
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

const highlightStyle: React.CSSProperties = {
  background: 'linear-gradient(120deg, #ff6b6b, #4ecdc4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
};

const stepsStyle: React.CSSProperties = {
  alignItems: 'flex-start'
};

const stepCardStyle: React.CSSProperties = {
  padding: '30px 20px',
  borderRadius: '20px',
  backgroundColor: 'white',
  border: '2px solid #e2e8f0',
  textAlign: 'center',
  position: 'relative',
  minHeight: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease'
};

const stepIconContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const stepIconStyle: React.CSSProperties = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease'
};

const iconTextStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3))'
};

const stepNumberStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '700',
  color: '#64748b',
  letterSpacing: '0.1em'
};

const stepTitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '600',
  margin: '0 0 10px 0',
  lineHeight: 1.3
};

const stepDescriptionStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#64748b',
  margin: 0,
  lineHeight: 1.4
};

const arrowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '40px',
  position: 'absolute',
  right: '-30px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1
};

const arrowIconStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: 'bold'
};

const progressContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px'
};

const progressBarStyle: React.CSSProperties = {
  width: '300px',
  height: '6px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '3px',
  overflow: 'hidden'
};

const progressFillStyle: React.CSSProperties = {
  height: '100%',
  background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4)',
  borderRadius: '3px',
  transition: 'width 0.5s ease'
};

const progressTextStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: '500'
};

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px'
};

const modalContentStyle: React.CSSProperties = {
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const modalCloseButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '15px',
  background: 'none',
  border: 'none',
  fontSize: '2rem',
  cursor: 'pointer',
  color: '#666',
  zIndex: 1001,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease'
};

const modalImageStyle: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '80vh',
  objectFit: 'contain',
  borderRadius: '10px'
};