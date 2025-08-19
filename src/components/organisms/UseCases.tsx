"use client";

import React, { useState, useEffect } from "react";

export default function UseCases() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cases = [
    {
      id: "municipality",
      title: "自治体の課長さんへ",
      subtitle: "（地域振興 / 住民参加施策）",
      icon: "🏛️",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg,rgb(95, 140, 212), #1d4ed8)",
      challenges: [
        "ボランティア活動の参加率が伸びない",
        "「誰がどれくらい活動しているか」を把握できない",
        "助成金や成果報告に必要なデータ収集が手間",
      ],
      solutions: [
        "活動参加をアシストクレジットで即時記録",
        "住民の貢献を見える化して、モチベーション向上",
        "データが蓄積されるので、助成金申請・行政報告に活用可能",
      ],
      value: "透明で持続可能な「住民参加型まちづくり」を実現できる",
    },
    {
      id: "enterprise",
      title: "企業の担当者さんへ",
      subtitle: "（新規事業 / コミュニティマーケティング）",
      icon: "🏢",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #047857)",
      challenges: [
        "社内外コミュニティでの貢献が定量化できない",
        "コミュニティ施策のROIを上司や経営陣に説明しにくい",
        "インセンティブやリワードが不公平になりがち",
      ],
      solutions: [
        "定量的な貢献ログをダッシュボードで可視化",
        "スマートコントラクトで公平な報酬分配",
        "API連携で既存マーケティングシステムにデータ統合",
      ],
      value:
        "「成果が見える」コミュニティ施策として社内説明・承認が取りやすくなる",
    },
    {
      title: "地域コミュニティマネージャーさんへ",
      subtitle: "（NPO・団体運営者）",
      icon: "🤝",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      challenges: [
        "会員やボランティアの参加状況が曖昧",
        "貢献に対して感謝やリワードをどう設計するか悩む",
        "活動の継続性が不安定",
      ],
      solutions: [
        "役割NFTでメンバーの役割を明確化",
        "貢献量に応じた自動報酬で不公平感を減らす",
        "活動ログを継続的に蓄積し、信頼の見える化",
      ],
      value:
        "貢献が「忘れられない・不公平にならない」仕組みで、持続的なコミュニティ運営が可能",
    },
    {
      title: "コミュニティ創設者さん・\n運営者さんへ",
      subtitle: "",
      icon: "💻",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg,rgb(149, 128, 196), #7c3aed)",
      challenges: [
        "仲間の貢献が可視化されにくい",
        "金銭的な報酬やインセンティブ設計が難しい",
        "運営の負担が集中しやすい",
      ],
      solutions: [
        "役割NFTとアシストクレジットで「誰がどのくらい貢献したか」を明確化",
        "貢献に応じて報酬を自動分配、透明性を確保",
        "活動記録を残せるため、次の協力者を巻き込みやすい",
      ],
      value:
        "信頼できる仕組みで、コミュニティをゼロからでも安心して立ち上げられる",
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

    const element = document.getElementById("use-cases");
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
    <section id="use-cases" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            あなたの現場でも、
            <br />
            <span style={highlightStyle}>すぐに役立ちます</span>
          </h2>
          <p style={subtitleStyle}>
            4つのターゲット別に、Tobanがどのように課題を解決するかをご紹介します
          </p>
        </div>

        <div style={gridStyle}>
          {cases.map((item, index) => (
            <button
              key={item.id}
              type="button"
              style={{
                ...cardStyle,
                transform:
                  hoveredCard === index
                    ? "translateY(-5px) scale(1.02)"
                    : isVisible
                      ? "translateY(0)"
                      : "translateY(30px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`,
                background: hoveredCard === index ? item.gradient : "white",
                height: selectedCard === index ? "auto" : "400px",
                minHeight: selectedCard === index ? "600px" : "400px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() =>
                setSelectedCard(selectedCard === index ? null : index)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCard(selectedCard === index ? null : index);
                }
              }}
              aria-expanded={selectedCard === index}
            >
              <div
                style={{
                  ...iconContainerStyle,
                  backgroundColor:
                    hoveredCard === index
                      ? "rgba(255, 255, 255, 0.2)"
                      : `${item.color}20`,
                  borderColor: item.color,
                }}
              >
                <span style={iconStyle}>{item.icon}</span>
              </div>

              <div style={contentStyle}>
                <h3
                  style={{
                    ...cardTitleStyle,
                    color: hoveredCard === index ? "white" : "#1e293b",
                  }}
                >
                  {item.title.split("\n").map((line, i) => (
                    <React.Fragment key={`${item.id}-title-${i}`}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h3>
                {item.subtitle && (
                  <p
                    style={{
                      ...subtitleCardStyle,
                      color:
                        hoveredCard === index
                          ? "rgba(255, 255, 255, 0.8)"
                          : "#64748b",
                    }}
                  >
                    {item.subtitle}
                  </p>
                )}

                {/* 常に表示されるプレビュー */}
                {selectedCard !== index && (
                  <div style={previewStyle}>
                    <div style={previewSectionStyle}>
                      <h4
                        style={{
                          ...sectionTitleStyle,
                          color: hoveredCard === index ? "white" : item.color,
                        }}
                      >
                        課題
                      </h4>
                      <p
                        style={{
                          ...previewTextStyle,
                          color:
                            hoveredCard === index
                              ? "rgba(255, 255, 255, 0.9)"
                              : "#64748b",
                        }}
                      >
                        {item.challenges[0]}など
                      </p>
                    </div>
                  </div>
                )}

                {/* 詳細表示 */}
                {selectedCard === index && (
                  <div style={detailStyle}>
                    <div style={detailSectionStyle}>
                      <h4
                        style={{
                          ...sectionTitleStyle,
                          color: hoveredCard === index ? "white" : item.color,
                        }}
                      >
                        課題
                      </h4>
                      <ul style={listStyle}>
                        {item.challenges.map((challenge, i) => (
                          <li
                            key={`${item.id}-challenge-${i}`}
                            style={{
                              ...listItemStyle,
                              color:
                                hoveredCard === index
                                  ? "rgba(255, 255, 255, 0.9)"
                                  : "#64748b",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: "0",
                                top: "0",
                                color:
                                  hoveredCard === index
                                    ? "rgba(255, 255, 255, 0.7)"
                                    : "#ef4444",
                              }}
                            >
                              •
                            </span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={detailSectionStyle}>
                      <h4
                        style={{
                          ...sectionTitleStyle,
                          color: hoveredCard === index ? "white" : item.color,
                        }}
                      >
                        Tobanが提供する解決策
                      </h4>
                      <ul style={listStyle}>
                        {item.solutions.map((solution, i) => (
                          <li
                            key={`${item.id}-solution-${i}`}
                            style={{
                              ...listItemStyle,
                              color:
                                hoveredCard === index
                                  ? "rgba(255, 255, 255, 0.9)"
                                  : "#64748b",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: "0",
                                top: "0",
                                color:
                                  hoveredCard === index
                                    ? "rgba(255, 255, 255, 0.7)"
                                    : "#10b981",
                              }}
                            >
                              ✓
                            </span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={valueContainerStyle}>
                      <h4
                        style={{
                          ...sectionTitleStyle,
                          color: hoveredCard === index ? "white" : item.color,
                        }}
                      >
                        価値
                      </h4>
                      <p
                        style={{
                          ...valueTextStyle,
                          color: hoveredCard === index ? "white" : "#1e293b",
                        }}
                      >
                        → {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div
                style={{
                  ...cardFooterStyle,
                  borderTopColor:
                    hoveredCard === index
                      ? "rgba(255, 255, 255, 0.2)"
                      : "#f1f5f9",
                }}
              >
                <span
                  style={{
                    ...learnMoreStyle,
                    color: hoveredCard === index ? "white" : item.color,
                  }}
                >
                  {selectedCard === index ? "閉じる ↑" : "詳しく見る ↓"}
                </span>
              </div>

              {/* ホバー時の背景装飾 */}
              {hoveredCard === index && (
                <div style={decorationStyle}>
                  <div style={decoration1Style} />
                  <div style={decoration2Style} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: "80px 20px",
  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1400px",
  margin: "0 auto",
  width: "100%",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "60px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 4vw, 2.5rem)",
  fontWeight: "700",
  color: "#1e293b",
  lineHeight: 1.3,
  margin: 0,
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "#64748b",
  marginTop: "20px",
  lineHeight: 1.6,
  maxWidth: "600px",
  margin: "20px auto 0 auto",
};

const highlightStyle: React.CSSProperties = {
  background: "linear-gradient(120deg, #3b82f6, #8b5cf6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const cardStyle: React.CSSProperties = {
  padding: "30px",
  borderRadius: "20px",
  backgroundColor: "white",
  border: "1px solid #e2e8f0",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  opacity: 0,
  transform: "translateY(30px)",
  display: "flex",
  flexDirection: "column",
};

const iconContainerStyle: React.CSSProperties = {
  width: "70px",
  height: "70px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "2px solid",
  transition: "all 0.3s ease",
};

const iconStyle: React.CSSProperties = {
  fontSize: "2rem",
  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  marginBottom: "20px",
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  fontWeight: "700",
  margin: "0 0 8px 0",
  lineHeight: 1.2,
  transition: "color 0.3s ease",
};

const subtitleCardStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  margin: "0 0 20px 0",
  lineHeight: 1.4,
  fontWeight: "500",
  transition: "color 0.3s ease",
};

const previewStyle: React.CSSProperties = {
  marginTop: "15px",
};

const previewSectionStyle: React.CSSProperties = {
  marginBottom: "15px",
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "600",
  margin: "0 0 10px 0",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  transition: "color 0.3s ease",
};

const previewTextStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.5,
  margin: 0,
  transition: "color 0.3s ease",
};

const detailStyle: React.CSSProperties = {
  marginTop: "15px",
};

const detailSectionStyle: React.CSSProperties = {
  marginBottom: "25px",
};

const listStyle: React.CSSProperties = {
  margin: "0",
  paddingLeft: "0",
  listStyle: "none",
};

const listItemStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  marginBottom: "8px",
  paddingLeft: "20px",
  position: "relative",
  transition: "color 0.3s ease",
};

const valueContainerStyle: React.CSSProperties = {
  padding: "20px",
  borderRadius: "12px",
  backgroundColor: "rgba(59, 130, 246, 0.05)",
  border: "1px solid rgba(59, 130, 246, 0.1)",
  marginTop: "20px",
};

const valueTextStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "600",
  lineHeight: 1.5,
  margin: 0,
  transition: "color 0.3s ease",
};

const cardFooterStyle: React.CSSProperties = {
  paddingTop: "20px",
  borderTop: "1px solid",
  transition: "border-color 0.3s ease",
  textAlign: "center",
};

const learnMoreStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  fontWeight: "600",
  transition: "color 0.3s ease",
};

const decorationStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
  overflow: "hidden",
};

const decoration1Style: React.CSSProperties = {
  position: "absolute",
  top: "-50%",
  right: "-20%",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  animation: "float 3s ease-in-out infinite",
};

const decoration2Style: React.CSSProperties = {
  position: "absolute",
  bottom: "-30%",
  left: "-10%",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  animation: "float 3s ease-in-out infinite reverse",
};
