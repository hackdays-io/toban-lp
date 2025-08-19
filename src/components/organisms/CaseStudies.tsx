"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cases = [
    {
      name: "Comoris",
      logoSrc: "/logo/comoris-logo.png",
      description: "沖縄・コミュニティ DAO。子育て支援トークン導入",
      link: "Case Study →",
      linkUrl: "#",
      color: "#ff6b6b",
      category: "コミュニティDAO",
      status: "active",
    },
    {
      name: "塩尻DAO",
      logoSrc: "/logo/shiojiridao-kogo.webp",
      description: "長野県・地域活性 DAO。農業バウンティを自動分配",
      link: "Interview →",
      linkUrl: "#",
      color: "#4ecdc4",
      category: "地域DAO",
      status: "active",
    },
    {
      id: "ento",
      name: "ento",
      logoSrc: null,
      description: "オープンソース気象データ連携",
      link: "Coming soon",
      linkUrl: null,
      color: "#45b7d1",
      category: "オープンソース",
      status: "coming",
    },
    {
      id: "eth-tokyo",
      name: "ETH Tokyo",
      logoSrc: "/logo/ETHTokyoLogoBlack.png",
      description: "ハッカソン採択プロジェクト",
      link: "Highlights →",
      linkUrl: "#",
      color: "#8b5cf6",
      category: "ハッカソン",
      status: "active",
    },
    {
      name: "Fracton",
      logoSrc: "/logo/fracton-logo.png",
      description: "インキュベーション支援",
      link: "Article →",
      linkUrl: "#",
      color: "#f59e0b",
      category: "インキュベーター",
      status: "active",
    },
    {
      name: "Localcoop",
      logoSrc: "/logo/localcoop-logo.png",
      description: "助け合いプラットフォーム",
      link: "Coming soon",
      linkUrl: null,
      color: "#10b981",
      category: "プラットフォーム",
      status: "coming",
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

    const element = document.getElementById("case-studies");
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
    <section id="case-studies" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            <span style={highlightStyle}>導入事例</span>
          </h2>
          <p style={subtitleStyle}>
            実際にTobanを活用している組織とプロジェクト
          </p>
        </div>

        <div style={gridStyle}>
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              style={{
                ...cardStyle,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`,
                background:
                  hoveredCard === index
                    ? `linear-gradient(135deg, ${caseItem.color}10, ${caseItem.color}05)`
                    : "white",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* ステータスバッジ */}
              <div
                style={{
                  ...statusBadgeStyle,
                  backgroundColor:
                    caseItem.status === "active" ? "#10b981" : "#f59e0b",
                  color: "white",
                }}
              >
                {caseItem.status === "active" ? "運用中" : "近日公開"}
              </div>

              {/* カテゴリー */}
              <div
                style={{
                  ...categoryStyle,
                  color: caseItem.color,
                  backgroundColor: `${caseItem.color}15`,
                }}
              >
                {caseItem.category}
              </div>

              {/* ロゴセクション */}
              <div
                style={{
                  ...logoSectionStyle,
                  borderColor:
                    hoveredCard === index ? caseItem.color : "#e2e8f0",
                }}
              >
                {caseItem.logoSrc ? (
                  <Image
                    src={caseItem.logoSrc}
                    alt={`${caseItem.name} ロゴ`}
                    width={60}
                    height={60}
                    style={{
                      objectFit: "contain",
                      borderRadius: "8px",
                      filter:
                        hoveredCard === index ? "brightness(1.1)" : "none",
                      transition: "all 0.3s ease",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      ...logoPlaceholderStyle,
                      backgroundColor: `${caseItem.color}20`,
                      color: caseItem.color,
                    }}
                  >
                    <span style={logoTextStyle}>{caseItem.name[0]}</span>
                  </div>
                )}
              </div>

              {/* コンテンツ */}
              <div style={contentSectionStyle}>
                <h3
                  style={{
                    ...nameStyle,
                    color: hoveredCard === index ? caseItem.color : "#1e293b",
                  }}
                >
                  {caseItem.name}
                </h3>
                <p
                  style={{
                    ...descriptionStyle,
                    color: hoveredCard === index ? "#374151" : "#64748b",
                  }}
                >
                  {caseItem.description}
                </p>
              </div>

              {/* フッター */}
              <div
                style={{
                  ...footerStyle,
                  borderTopColor:
                    hoveredCard === index ? `${caseItem.color}20` : "#f1f5f9",
                }}
              >
                {caseItem.linkUrl ? (
                  <a
                    href={caseItem.linkUrl}
                    style={{
                      ...linkStyle,
                      color: caseItem.color,
                      borderColor: caseItem.color,
                    }}
                  >
                    {caseItem.link}
                  </a>
                ) : (
                  <span
                    style={{
                      ...comingSoonStyle,
                      color: "#94a3b8",
                    }}
                  >
                    {caseItem.link}
                  </span>
                )}
              </div>

              {/* ホバー時のアクセント */}
              {hoveredCard === index && (
                <div
                  style={{
                    ...accentLineStyle,
                    backgroundColor: caseItem.color,
                  }}
                />
              )}
            </div>
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
  maxWidth: "1200px",
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
  margin: "0 0 15px 0",
  lineHeight: 1.2,
};

const highlightStyle: React.CSSProperties = {
  background: "linear-gradient(120deg, #ff6b6b, #4ecdc4)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "#64748b",
  margin: 0,
  fontWeight: "400",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "clamp(20px, 4vw, 30px)",
  maxWidth: "1100px",
  margin: "0 auto",
};

const cardStyle: React.CSSProperties = {
  padding: "clamp(20px, 4vw, 30px)",
  borderRadius: "20px",
  backgroundColor: "white",
  border: "1px solid #e2e8f0",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  opacity: 0,
  transform: "translateY(20px)",
};

const statusBadgeStyle: React.CSSProperties = {
  position: "absolute",
  top: "20px",
  right: "20px",
  padding: "4px 12px",
  borderRadius: "12px",
  fontSize: "0.75rem",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const categoryStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: "8px",
  fontSize: "0.8rem",
  fontWeight: "600",
  marginBottom: "20px",
  letterSpacing: "0.05em",
};

const logoSectionStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "16px",
  border: "2px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "25px",
  marginLeft: "auto",
  marginRight: "auto",
  transition: "border-color 0.3s ease",
};

const logoPlaceholderStyle: React.CSSProperties = {
  width: "60px",
  height: "60px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};

const logoTextStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "700",
};

const contentSectionStyle: React.CSSProperties = {
  marginBottom: "25px",
};

const nameStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  fontWeight: "600",
  margin: "0 0 15px 0",
  lineHeight: 1.3,
  transition: "color 0.3s ease",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.6,
  margin: 0,
  transition: "color 0.3s ease",
};

const footerStyle: React.CSSProperties = {
  paddingTop: "20px",
  borderTop: "1px solid",
  transition: "border-color 0.3s ease",
};

const linkStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "2px solid",
  fontSize: "0.9rem",
  fontWeight: "600",
  textDecoration: "none",
  transition: "all 0.3s ease",
  backgroundColor: "transparent",
};

const comingSoonStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "0.9rem",
  fontWeight: "600",
  fontStyle: "italic",
};

const accentLineStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "4px",
  height: "100%",
  transition: "all 0.3s ease",
};
