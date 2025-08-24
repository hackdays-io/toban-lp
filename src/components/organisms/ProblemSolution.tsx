"use client";

import type React from "react";
import { useEffect, useState } from "react";

export default function ProblemSolution() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("problem-solution");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const problems = [
    { id: "visibility", icon: "📊", text: "貢献の見える化が難しい" },
    { id: "calculation", icon: "🧮", text: "報酬配分の計算が煩雑" },
    { id: "sustainability", icon: "🔄", text: "ボランティアが続かない" },
    { id: "communication", icon: "💬", text: "活動説明が難しい" },
  ];

  const solutions = [
    { id: "instant-record", icon: "⚡", text: "アシストクレジットで即時記録" },
    { id: "auto-distribution", icon: "🤖", text: "一度設定すれば自動で分配" },
    { id: "token-reward", icon: "🎯", text: "貢献がトークンに" },
    { id: "activity-history", icon: "📈", text: "活動履歴として可視化" },
  ];

  return (
    <section
      id="problem-solution"
      style={{
        ...sectionStyle,
        padding: isMobile ? "60px 15px" : "80px 20px",
      }}
    >
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2
            style={{
              ...titleStyle,
              fontSize: isMobile ? "1.6rem" : "clamp(1.8rem, 4vw, 2.5rem)",
            }}
          >
            協働プロジェクトの現場の
            <br />
            <span style={highlightStyle}>「よくある困りごと」</span>
            <br />
            Tobanが全て解決します
          </h2>
        </div>

        <div
          style={{
            ...contentGridStyle,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr",
            gap: isMobile ? "30px" : "40px",
          }}
        >
          {/* 課題セクション */}
          <div
            style={{
              ...cardStyle,
              background:
                "linear-gradient(135deg, #ff6b6b10 0%, #ee5a6f10 100%)",
              borderLeft: "4px solid #ff6b6b",
              padding: isMobile ? "25px 20px" : "40px",
              ...(isVisible
                ? { ...animationStyle, animationDelay: "0.2s" }
                : {}),
            }}
          >
            <div style={cardHeaderStyle}>
              <div style={problemIconStyle}>⚠️</div>
              <h3
                style={{
                  ...cardTitleStyle,
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                }}
              >
                課題
              </h3>
            </div>
            <div style={listContainerStyle}>
              {problems.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    ...listItemStyle,
                    padding: isMobile ? "12px 16px" : "15px 20px",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    ...(isVisible
                      ? {
                          ...listItemAnimationStyle,
                          animationDelay: `${0.4 + index * 0.1}s`,
                        }
                      : {}),
                  }}
                >
                  <span
                    style={{
                      ...iconStyle,
                      fontSize: isMobile ? "1.2rem" : "1.5rem",
                      minWidth: isMobile ? "25px" : "30px",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 矢印 */}
          <div
            style={{
              ...arrowContainerStyle,
              display: isMobile ? "none" : "flex",
            }}
          >
            <div
              style={{
                ...arrowStyle,
                ...(isVisible ? { ...arrowAnimationStyle } : {}),
              }}
            >
              →
            </div>
          </div>

          {/* モバイル用矢印 */}
          {isMobile && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  color: "#64748b",
                  ...(isVisible
                    ? { animation: "bounceIn 1s ease-out 0.5s forwards" }
                    : {}),
                }}
              >
                ↓
              </div>
            </div>
          )}

          {/* 解決策セクション */}
          <div
            style={{
              ...cardStyle,
              background:
                "linear-gradient(135deg, #4ecdc410 0%, #44a08d10 100%)",
              borderLeft: "4px solid #4ecdc4",
              padding: isMobile ? "25px 20px" : "40px",
              ...(isVisible
                ? { ...animationStyle, animationDelay: "0.3s" }
                : {}),
            }}
          >
            <div style={cardHeaderStyle}>
              <div style={solutionIconStyle}>✨</div>
              <h3
                style={{
                  ...cardTitleStyle,
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                }}
              >
                解決策
              </h3>
            </div>
            <div style={listContainerStyle}>
              {solutions.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    ...listItemStyle,
                    padding: isMobile ? "12px 16px" : "15px 20px",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    ...(isVisible
                      ? {
                          ...listItemAnimationStyle,
                          animationDelay: `${0.6 + index * 0.1}s`,
                        }
                      : {}),
                  }}
                >
                  <span
                    style={{
                      ...iconStyle,
                      fontSize: isMobile ? "1.2rem" : "1.5rem",
                      minWidth: isMobile ? "25px" : "30px",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
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
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "60px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
  fontWeight: "700",
  color: "#1e293b",
  lineHeight: 1.3,
  margin: 0,
};

const highlightStyle: React.CSSProperties = {
  background: "linear-gradient(120deg, #ff6b6b, #4ecdc4)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const contentGridStyle: React.CSSProperties = {
  alignItems: "stretch",
};

const cardStyle: React.CSSProperties = {
  borderRadius: "20px",
  backgroundColor: "white",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  opacity: 0,
  transform: "translateY(30px)",
};

const animationStyle: React.CSSProperties = {
  animation: "fadeInUp 0.8s ease-out forwards",
};

const cardHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "30px",
  paddingBottom: "20px",
  borderBottom: "2px solid #f1f5f9",
};

const problemIconStyle: React.CSSProperties = {
  fontSize: "2rem",
  marginRight: "15px",
  filter: "drop-shadow(0 2px 4px rgba(255, 107, 107, 0.3))",
};

const solutionIconStyle: React.CSSProperties = {
  fontSize: "2rem",
  marginRight: "15px",
  filter: "drop-shadow(0 2px 4px rgba(78, 205, 196, 0.3))",
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "600",
  margin: 0,
  color: "#1e293b",
};

const listContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const listItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "15px 20px",
  backgroundColor: "rgba(248, 250, 252, 0.8)",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  transition: "all 0.3s ease",
  cursor: "pointer",
  opacity: 0,
  transform: "translateX(-20px)",
};

const listItemAnimationStyle: React.CSSProperties = {
  animation: "slideInLeft 0.6s ease-out forwards",
};

const iconStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  marginRight: "15px",
  minWidth: "30px",
};

const arrowContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const arrowStyle: React.CSSProperties = {
  fontSize: "3rem",
  color: "#64748b",
  fontWeight: "bold",
  opacity: 0,
  transform: "scale(0.5)",
};

const arrowAnimationStyle: React.CSSProperties = {
  animation: "bounceIn 1s ease-out 0.5s forwards",
};
