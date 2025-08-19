'use client';

import React, { useState, useEffect } from 'react';

export default function Faq() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 最初の質問を開いておく

  const faqs = [
    {
      question: 'Web3の知識がなくても使えますか？',
      answer: 'はい、ウォレットの作成手順も含めてサポートしています。',
      detailedAnswer: 'Tobanは初心者でも簡単に使えるよう設計されています。ウォレットの作成から基本的な使い方まで、ステップバイステップのガイドを提供しており、Web3の専門知識がなくても安心してご利用いただけます。',
      icon: '🔰',
      color: '#3b82f6'
    },
    {
      question: '現在のツールと併用できますか？',
      answer: 'Discord や GitHub との連携も可能です。',
      detailedAnswer: 'Tobanは既存のワークフローを妨げることなく、DiscordボットやGitHub連携、Slack統合など、多様なツールとの連携機能を提供しています。APIも公開しているため、カスタム統合も可能です。',
      icon: '🔗',
      color: '#10b981'
    },
    {
      question: '税務処理用の出力は？',
      answer: 'ダッシュボードからCSV出力が可能です。',
      detailedAnswer: 'すべての取引履歴と分配記録は、税務申告に必要な形式でCSV出力できます。日本の税制に対応した項目分けも行っており、税理士さんとの連携もスムーズです。',
      icon: '📊',
      color: '#f59e0b'
    },
    {
      question: 'セキュリティはどのように確保されていますか？',
      answer: 'すべてオープンソース、監査済みスマートコントラクトを使用。',
      detailedAnswer: 'Tobanのコードはすべてオープンソースで公開されており、使用するスマートコントラクトは第三者機関による監査を受けています。また、秘密鍵の管理はユーザー自身が行うため、中央集権的なリスクがありません。',
      icon: '🔒',
      color: '#8b5cf6'
    },
    {
      question: '利用料金はかかりますか？',
      answer: 'プラットフォーム利用は無料、ブロックチェーン手数料のみ。',
      detailedAnswer: 'Toban自体の利用料金は一切かかりません。ただし、ブロックチェーン上での取引には少額のガス代（手数料）が発生します。これは一般的に数十円から数百円程度です。',
      icon: '💰',
      color: '#ef4444'
    },
    {
      question: 'コミュニティサポートはありますか？',
      answer: 'Discordコミュニティで24/7サポートを提供。',
      detailedAnswer: '活発なDiscordコミュニティがあり、ユーザー同士の助け合いや開発チームからの直接サポートを受けられます。また、定期的なオンラインワークショップや勉強会も開催しています。',
      icon: '💬',
      color: '#06b6d4'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('faq');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            <span style={highlightStyle}>よくある質問</span>
          </h2>
          <p style={subtitleStyle}>
            Tobanについて寄せられる質問とその回答をまとめました
          </p>
        </div>

        <div style={faqContainerStyle}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                ...faqItemStyle,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <button
                style={{
                  ...questionButtonStyle,
                  backgroundColor: openIndex === index ? faq.color + '10' : 'white',
                  borderColor: openIndex === index ? faq.color : '#e2e8f0'
                }}
                onClick={() => toggleFaq(index)}
              >
                <div style={questionHeaderStyle}>
                  <div style={{
                    ...iconWrapperStyle,
                    backgroundColor: faq.color + '20',
                    borderColor: faq.color
                  }}>
                    <span style={iconStyle}>{faq.icon}</span>
                  </div>
                  
                  <span style={{
                    ...questionTextStyle,
                    color: openIndex === index ? faq.color : '#1e293b'
                  }}>
                    {faq.question}
                  </span>
                  
                  <div style={{
                    ...chevronStyle,
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: faq.color
                  }}>
                    ▼
                  </div>
                </div>
              </button>

              <div style={{
                ...answerContainerStyle,
                height: openIndex === index ? 'auto' : '0',
                opacity: openIndex === index ? 1 : 0,
                padding: openIndex === index ? '25px 30px' : '0 30px'
              }}>
                <div style={answerContentStyle}>
                  <p style={shortAnswerStyle}>
                    <span style={{
                      ...answerIconStyle,
                      color: faq.color
                    }}>A.</span>
                    {faq.answer}
                  </p>
                  <p style={detailedAnswerStyle}>
                    {faq.detailedAnswer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 追加サポート */}
        <div style={supportSectionStyle}>
          <h3 style={supportTitleStyle}>他にご質問がありますか？</h3>
          <p style={supportDescriptionStyle}>
            お気軽にお問い合わせください。コミュニティでお待ちしています。
          </p>
          <div style={supportButtonsStyle}>
            <button style={primarySupportButtonStyle}>
              <span style={supportButtonIconStyle}>💬</span>
              Discordで質問する
            </button>
            <button style={secondarySupportButtonStyle}>
              📧 メールで問い合わせ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: '80px 20px',
  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  color: 'white',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center'
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
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
  margin: '0 0 15px 0',
  lineHeight: 1.2
};

const highlightStyle: React.CSSProperties = {
  background: 'linear-gradient(120deg, #3b82f6, #10b981)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: 'rgba(255, 255, 255, 0.8)',
  margin: 0,
  fontWeight: '400'
};

const faqContainerStyle: React.CSSProperties = {
  marginBottom: '60px'
};

const faqItemStyle: React.CSSProperties = {
  marginBottom: '20px',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: 'white',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  opacity: 0,
  transform: 'translateY(30px)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
};

const questionButtonStyle: React.CSSProperties = {
  width: '100%',
  padding: '25px 30px',
  border: '2px solid',
  background: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  borderRadius: 0
};

const questionHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
};

const iconWrapperStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  border: '2px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.5rem'
};

const questionTextStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '600',
  textAlign: 'left',
  flex: 1,
  transition: 'color 0.3s ease'
};

const chevronStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  transition: 'transform 0.3s ease, color 0.3s ease',
  flexShrink: 0
};

const answerContainerStyle: React.CSSProperties = {
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: '#f8fafc'
};

const answerContentStyle: React.CSSProperties = {
  borderTop: '1px solid #e2e8f0'
};

const shortAnswerStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#1e293b',
  margin: '0 0 15px 0',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px'
};

const answerIconStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 'bold',
  flexShrink: 0
};

const detailedAnswerStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#64748b',
  margin: 0,
  lineHeight: 1.6
};

const supportSectionStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '50px 30px',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)'
};

const supportTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '600',
  margin: '0 0 15px 0',
  color: 'white'
};

const supportDescriptionStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'rgba(255, 255, 255, 0.8)',
  margin: '0 0 30px 0',
  lineHeight: 1.5
};

const supportButtonsStyle: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const primarySupportButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '15px 30px',
  borderRadius: '12px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  backgroundColor: '#3b82f6',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
};

const secondarySupportButtonStyle: React.CSSProperties = {
  padding: '15px 30px',
  borderRadius: '12px',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  fontSize: '1rem',
  fontWeight: '600',
  backgroundColor: 'transparent',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const supportButtonIconStyle: React.CSSProperties = {
  fontSize: '1.1rem'
};