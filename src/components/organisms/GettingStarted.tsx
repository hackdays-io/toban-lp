"use client";

import type React from "react";
import { useState, useEffect } from "react";

export default function GettingStarted() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  const roles = [
    {
      id: "contributor",
      role: "コントリビューター",
      capabilities: "タスクに応募・履歴を積む",
      initialCost: "0 ETH",
      icon: "👥",
      color: "#3b82f6",
      description:
        "プロジェクトに参加してタスクを完了し、貢献の履歴を積み重ねていきます。",
      benefits: ["履歴の蓄積", "スキルアップ", "コミュニティ参加"],
    },
    {
      id: "donor",
      role: "寄付者",
      capabilities: "トークン or ETH をプールへ寄付",
      initialCost: "任意",
      icon: "💝",
      color: "#10b981",
      description:
        "プロジェクトを資金面で支援し、コミュニティの発展に貢献します。",
      benefits: ["社会貢献", "透明性確保", "インパクト追跡"],
    },
    {
      id: "field-partner",
      role: "フィールドパートナー",
      capabilities: "地域課題を登録し共同運営",
      initialCost: "0 ETH",
      icon: "🤝",
      color: "#f59e0b",
      description: "地域や分野の課題を登録し、プロジェクトを共同で運営します。",
      benefits: ["課題解決", "ネットワーク構築", "地域貢献"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    const element = document.getElementById("getting-started");
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
    <section id="getting-started" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            <span style={highlightStyle}>参加方法</span>
            <br />
            Getting Started
          </h2>
          <p style={subtitleStyle}>
            あなたに最適な参加方法を選んで、今すぐTobanコミュニティに参加しましょう
          </p>
        </div>

        <div style={rolesGridStyle}>
          {roles.map((item, index) => (
            <div
              key={item.id}
              style={{
                ...roleCardStyle,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.2}s`,
                background:
                  selectedRole === index
                    ? `linear-gradient(135deg, ${item.color}15, ${item.color}05)`
                    : "white",
                borderColor: selectedRole === index ? item.color : "#e2e8f0",
              }}
              onMouseEnter={() => setSelectedRole(index)}
              onMouseLeave={() => setSelectedRole(null)}
            >
              {/* コストバッジ（右上） */}
              <div
                style={{
                  ...costBadgeStyle,
                  backgroundColor:
                    item.initialCost === "0 ETH" ? "#10b981" : item.color,
                  color: "white",
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
              >
                {item.initialCost}
              </div>

              {/* アイコン（中央） */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <div
                  style={{
                    ...iconContainerStyle,
                    backgroundColor: `${item.color}20`,
                    borderColor: item.color,
                    marginLeft: "0",
                    marginRight: "0",
                  }}
                >
                  <span style={iconStyle}>{item.icon}</span>
                </div>
              </div>

              {/* メインコンテンツ */}
              <div style={cardContentStyle}>
                <h3
                  style={{
                    ...roleTitleStyle,
                    color: selectedRole === index ? item.color : "#1e293b",
                  }}
                >
                  {item.role}
                </h3>

                <p style={roleCapabilitiesStyle}>{item.capabilities}</p>

                <p style={roleDescriptionStyle}>{item.description}</p>

                {/* メリット */}
                <div style={benefitsStyle}>
                  <h4 style={benefitsTitleStyle}>主なメリット</h4>
                  <ul style={benefitsListStyle}>
                    {item.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={`${item.id}-${benefitIndex}`}
                        style={benefitItemStyle}
                      >
                        <span
                          style={{
                            ...benefitIconStyle,
                            color: item.color,
                          }}
                        >
                          ✓
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA ボタン */}
              <div style={cardFooterStyle}>
                <button
                  type="button"
                  style={{
                    ...ctaButtonStyle,
                    backgroundColor:
                      selectedRole === index ? item.color : "transparent",
                    color: selectedRole === index ? "white" : item.color,
                    borderColor: item.color,
                  }}
                  onMouseEnter={(e) => {
                    if (selectedRole !== index) {
                      e.currentTarget.style.backgroundColor = item.color;
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedRole !== index) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = item.color;
                    }
                  }}
                >
                  この役割で参加する →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 全体的なCTA */}
        <div style={mainCtaStyle}>
          <div style={ctaContentStyle}>
            <h3 style={ctaTitleStyle}>始める準備はできましたか？</h3>
            <p style={ctaDescriptionStyle}>
              数分で参加できます。まずはコントリビューターとして始めて、
              徐々に他の役割も体験してみましょう。
            </p>
            <div style={ctaButtonsStyle}>
              <a
                href="https://toban.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                style={primaryCtaButtonStyle}
              >
                <span style={ctaButtonIconStyle}>🚀</span>
                今すぐ始める
              </a>
              <button type="button" style={secondaryCtaButtonStyle}>
                詳細ガイドを見る
              </button>
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
  fontSize: "clamp(2rem, 4vw, 2.8rem)",
  fontWeight: "700",
  color: "#1e293b",
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
  color: "#64748b",
  margin: 0,
  fontWeight: "400",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
};

const rolesGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "clamp(20px, 4vw, 30px)",
  marginBottom: "60px",
};

const roleCardStyle: React.CSSProperties = {
  padding: "clamp(20px, 4vw, 30px)",
  borderRadius: "20px",
  backgroundColor: "white",
  border: "2px solid",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  opacity: 0,
  transform: "translateY(20px)",
  position: "relative",
  overflow: "hidden",
};

const cardHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "25px",
};

const iconContainerStyle: React.CSSProperties = {
  width: "60px",
  height: "60px",
  borderRadius: "16px",
  border: "2px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "auto",
  marginRight: "auto",
};

const iconStyle: React.CSSProperties = {
  fontSize: "1.8rem",
};

const costBadgeStyle: React.CSSProperties = {
  padding: "8px 16px",
  borderRadius: "20px",
  fontSize: "0.9rem",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const cardContentStyle: React.CSSProperties = {
  marginBottom: "30px",
};

const roleTitleStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  fontWeight: "600",
  margin: "0 0 15px 0",
  lineHeight: 1.3,
  transition: "color 0.3s ease",
};

const roleCapabilitiesStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#64748b",
  margin: "0 0 15px 0",
  fontWeight: "500",
};

const roleDescriptionStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "#64748b",
  margin: "0 0 20px 0",
  lineHeight: 1.5,
};

const benefitsStyle: React.CSSProperties = {
  marginTop: "20px",
};

const benefitsTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#374151",
  margin: "0 0 10px 0",
};

const benefitsListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const benefitItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "0.9rem",
  color: "#64748b",
  marginBottom: "8px",
};

const benefitIconStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  fontWeight: "bold",
};

const cardFooterStyle: React.CSSProperties = {
  paddingTop: "20px",
  borderTop: "1px solid #f1f5f9",
};

const ctaButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px 25px",
  borderRadius: "12px",
  border: "2px solid",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  backgroundColor: "transparent",
};

const mainCtaStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "clamp(40px, 8vw, 60px) clamp(20px, 6vw, 40px)",
  borderRadius: "24px",
  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  color: "white",
  position: "relative",
  overflow: "hidden",
};

const ctaContentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
};

const ctaTitleStyle: React.CSSProperties = {
  fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
  fontWeight: "700",
  margin: "0 0 15px 0",
  lineHeight: 1.2,
};

const ctaDescriptionStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "rgba(255, 255, 255, 0.9)",
  margin: "0 0 30px 0",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.5,
};

const ctaButtonsStyle: React.CSSProperties = {
  display: "flex",
  gap: "clamp(15px, 3vw, 20px)",
  justifyContent: "center",
  flexWrap: "wrap",
};

const primaryCtaButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  padding: "18px 36px",
  borderRadius: "12px",
  border: "none",
  fontSize: "1.1rem",
  fontWeight: "700",
  backgroundColor: "white",
  color: "#3b82f6",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
};

const secondaryCtaButtonStyle: React.CSSProperties = {
  padding: "18px 36px",
  borderRadius: "12px",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  fontSize: "1.1rem",
  fontWeight: "600",
  backgroundColor: "transparent",
  color: "white",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const ctaButtonIconStyle: React.CSSProperties = {
  fontSize: "1.2rem",
};
