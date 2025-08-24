"use client";

import type React from "react";
import { useEffect, useState } from "react";

export default function Faq() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 最初の質問を開いておく

  const faqs = [
    {
      id: "technical-knowledge",
      question: "Tobanを使うのに専門的な知識は必要ですか？",
      answer: "いいえ、必要ありません。",
      detailedAnswer:
        "Tobanはブラウザベースで利用でき、NFTやブロックチェーンの知識がなくても簡単に使い始められます。技術的な部分はすべてTobanが裏側で処理します。",
      icon: "🔰",
      color: "#3b82f6",
    },
    {
      id: "free-usage",
      question: "無料で使えますか？",
      answer: "はい。まずは無料プランで始められます。",
      detailedAnswer:
        "小規模コミュニティや実証実験レベルでは無料で十分ご利用いただけます。利用規模が大きくなった場合に応じて有料プランをご用意しています。",
      icon: "💰",
      color: "#10b981",
    },
    {
      id: "reward-types",
      question: "報酬は必ず金銭で支払う必要がありますか？",
      answer: "いいえ。",
      detailedAnswer:
        "Tobanでは「金銭」「ポイント」「NFT」「特典（イベント参加権、商品引換など）」など、コミュニティに合った形で報酬を設計できます。",
      icon: "🎁",
      color: "#f59e0b",
    },
    {
      id: "security",
      question: "セキュリティは大丈夫ですか？",
      answer: "はい。",
      detailedAnswer:
        "Tobanはスマートコントラクトや暗号化技術を用いた堅牢なプロトコルスタックで構築されており、改ざんや不正を防ぎます。大切なデータは安全に保護されます。",
      icon: "🔒",
      color: "#8b5cf6",
    },
    {
      id: "community-types",
      question: "どんなコミュニティに向いていますか？",
      answer:
        "自治体・企業・NPO・地域団体・オンラインサロンなど、大小さまざまなコミュニティに対応可能です。",
      detailedAnswer:
        "特に「貢献を見える化して公平に報酬や感謝を伝えたい」場面で効果を発揮します。",
      icon: "🏘️",
      color: "#ef4444",
    },
    {
      id: "data-usage",
      question: "活動データはどのように活用できますか？",
      answer:
        "貢献ログはTobanのダッシュボードで集計・可視化され、助成金申請や活動報告、企業のROI測定などに活用できます。",
      detailedAnswer: "透明で信頼できるデータとして第三者にも提示可能です。",
      icon: "📊",
      color: "#06b6d4",
    },
    {
      id: "account-requirements",
      question: "参加者は特別なアカウントやウォレットが必要ですか？",
      answer: "いいえ。",
      detailedAnswer:
        "メールアドレスやSNSアカウントで簡単に参加できます。必要に応じて後からウォレットを接続することも可能です。",
      icon: "👤",
      color: "#84cc16",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("faq");
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
              key={faq.id}
              style={{
                ...faqItemStyle,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <button
                type="button"
                style={{
                  ...questionButtonStyle,
                  backgroundColor:
                    openIndex === index ? `${faq.color}10` : "white",
                  borderColor: openIndex === index ? faq.color : "#e2e8f0",
                }}
                onClick={() => toggleFaq(index)}
              >
                <div style={questionHeaderStyle}>
                  <div
                    style={{
                      ...iconWrapperStyle,
                      backgroundColor: `${faq.color}20`,
                      borderColor: faq.color,
                    }}
                  >
                    <span style={iconStyle}>{faq.icon}</span>
                  </div>

                  <span
                    style={{
                      ...questionTextStyle,
                      color: openIndex === index ? faq.color : "#1e293b",
                    }}
                  >
                    {faq.question}
                  </span>

                  <div
                    style={{
                      ...chevronStyle,
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      color: faq.color,
                    }}
                  >
                    ▼
                  </div>
                </div>
              </button>

              <div
                style={{
                  ...answerContainerStyle,
                  height: openIndex === index ? "auto" : "0",
                  opacity: openIndex === index ? 1 : 0,
                  padding: openIndex === index ? "25px 30px" : "0 30px",
                }}
              >
                <div style={answerContentStyle}>
                  <p style={shortAnswerStyle}>
                    <span
                      style={{
                        ...answerIconStyle,
                        color: faq.color,
                      }}
                    >
                      A.
                    </span>
                    {faq.answer}
                  </p>
                  <p style={detailedAnswerStyle}>{faq.detailedAnswer}</p>
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
            <a
              href="https://discord.com/channels/979969380802777169/1277777126359302220"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button type="button" style={primarySupportButtonStyle}>
                <span style={supportButtonIconStyle}>💬</span>
                Discordで質問する
              </button>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScpzZMaFy9kKN-oibPM2zM154-YtP1v82v1Rf9oARjOz2r8gg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button type="button" style={secondarySupportButtonStyle}>
                📧 メールで問い合わせ
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: "80px 20px",
  background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
  color: "white",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  width: "100%",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "60px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 4vw, 2.8rem)",
  fontWeight: "700",
  margin: "0 0 15px 0",
  lineHeight: 1.2,
};

const highlightStyle: React.CSSProperties = {
  background: "linear-gradient(120deg, #3b82f6, #10b981)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "rgba(255, 255, 255, 0.8)",
  margin: 0,
  fontWeight: "400",
};

const faqContainerStyle: React.CSSProperties = {
  marginBottom: "60px",
};

const faqItemStyle: React.CSSProperties = {
  marginBottom: "20px",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "white",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  opacity: 0,
  transform: "translateY(30px)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
};

const questionButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "clamp(20px, 4vw, 25px) clamp(20px, 4vw, 30px)",
  border: "2px solid",
  background: "white",
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderRadius: 0,
};

const questionHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "clamp(12px, 3vw, 20px)",
};

const iconWrapperStyle: React.CSSProperties = {
  width: "clamp(40px, 8vw, 50px)",
  height: "clamp(40px, 8vw, 50px)",
  borderRadius: "12px",
  border: "2px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const iconStyle: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
};

const questionTextStyle: React.CSSProperties = {
  fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
  fontWeight: "600",
  textAlign: "left",
  flex: 1,
  transition: "color 0.3s ease",
};

const chevronStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  transition: "transform 0.3s ease, color 0.3s ease",
  flexShrink: 0,
};

const answerContainerStyle: React.CSSProperties = {
  overflow: "hidden",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  backgroundColor: "#f8fafc",
};

const answerContentStyle: React.CSSProperties = {
  borderTop: "1px solid #e2e8f0",
};

const shortAnswerStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#1e293b",
  margin: "0 0 15px 0",
  fontWeight: "600",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  textAlign: "left",
};

const answerIconStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "bold",
  flexShrink: 0,
};

const detailedAnswerStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "#64748b",
  margin: 0,
  lineHeight: 1.6,
  textAlign: "left",
};

const supportSectionStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "50px 30px",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
};

const supportTitleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "600",
  margin: "0 0 15px 0",
  color: "white",
};

const supportDescriptionStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "rgba(255, 255, 255, 0.8)",
  margin: "0 0 30px 0",
  lineHeight: 1.5,
};

const supportButtonsStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const primarySupportButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  padding: "15px 30px",
  borderRadius: "12px",
  border: "none",
  fontSize: "1rem",
  fontWeight: "600",
  backgroundColor: "#3b82f6",
  color: "white",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
};

const secondarySupportButtonStyle: React.CSSProperties = {
  padding: "15px 30px",
  borderRadius: "12px",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  fontSize: "1rem",
  fontWeight: "600",
  backgroundColor: "transparent",
  color: "white",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const supportButtonIconStyle: React.CSSProperties = {
  fontSize: "1.1rem",
};
