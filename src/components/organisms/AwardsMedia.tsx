"use client";

import type React from "react";
import { useState, useEffect } from "react";

export default function AwardsMedia() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const awards = [
    {
      id: "eth-tokyo-2024",
      title: "ETH Tokyo 2024 Finalist",
      subtitle: "（Toban プロトタイプ）",
      date: "2024年4月",
      type: "award",
      icon: "🏆",
      color: "#ff6b6b",
      links: [
        {
          url: "https://www.linkedin.com/posts/haruki-kondo-517073204_selected-as-a-finalist-for-eth-tokyo-2024-activity-7233684980688642048-GJIh?utm_source=chatgpt.com",
          text: "linkedin.com",
        },
      ],
    },
    {
      id: "agentic-ethereum-2025",
      title: "Agentic Ethereum 2025",
      subtitle: "ハッカソン参加",
      date: "2025年1月",
      type: "event",
      icon: "🚀",
      color: "#4ecdc4",
      links: [
        {
          url: "https://ethglobal.com/events/agents?utm_source=chatgpt.com",
          text: "ethglobal.com",
        },
      ],
    },
    {
      id: "fracton-incubation-2024",
      title: "Fracton Incubation 2024",
      subtitle: "採択",
      date: "2024年6月",
      type: "program",
      icon: "🌱",
      color: "#45b7d1",
      links: [
        {
          url: "https://technode.global/2023/03/22/fracton-ventures-shaping-the-web3-landscape-through-strategic-incubation-and-global-collaboration-qa/?utm_source=chatgpt.com",
          text: "technode.global",
        },
      ],
    },
    {
      id: "ethtaipei-2025",
      title: "ETHTaipei 2025",
      subtitle: "スピーカー登壇",
      date: "2025年1月",
      type: "speaking",
      icon: "🎤",
      color: "#8b5cf6",
      links: [
        {
          url: "https://www.dlnews.com/research/internal/ethtaipei-2025-partners-with-ethglobal-vitalik-buterin/?utm_source=chatgpt.com",
          text: "ethtaipei.org",
        },
      ],
    },
    {
      id: "weekly-gm-joichi-ito",
      title: '週刊番組 "weekly gm" 出演',
      subtitle: "（Joichi Ito YouTube）",
      date: "2024年12月",
      type: "media",
      icon: "📺",
      color: "#f59e0b",
      links: [
        {
          url: "https://dalab.xyz/en/project/weekly-gm/?utm_source=chatgpt.com",
          text: "dalab.xyz",
        },
      ],
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

    const element = document.getElementById("awards-media");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getTypeLabel = (type: string) => {
    const typeMap: { [key: string]: string } = {
      award: "受賞",
      event: "イベント",
      program: "プログラム",
      speaking: "講演",
      media: "メディア",
    };
    return typeMap[type] || type;
  };

  return (
    <section id="awards-media" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            <span style={highlightStyle}>受賞</span> & メディア掲載
          </h2>
          <p style={subtitleStyle}>
            Tobanプロジェクトの主要な実績とマイルストーン
          </p>
        </div>

        <div style={timelineStyle}>
          {/* タイムライン軸 */}
          <div style={timelineLineStyle} />

          {awards.map((award, index) => (
            <div
              key={award.id}
              style={{
                ...timelineItemStyle,
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              onTouchStart={() => setActiveItem(index)}
              onTouchEnd={() => setTimeout(() => setActiveItem(null), 2000)}
            >
              {/* タイムライン ドット */}
              <div
                style={{
                  ...timelineDotStyle,
                  backgroundColor: award.color,
                  transform: activeItem === index ? "scale(1.3)" : "scale(1)",
                  boxShadow:
                    activeItem === index
                      ? `0 0 20px ${award.color}40, 0 0 40px ${award.color}20`
                      : `0 4px 15px ${award.color}30`,
                }}
              >
                <span style={dotIconStyle}>{award.icon}</span>
              </div>

              {/* コンテンツカード */}
              <div
                style={{
                  ...cardStyle,
                  background: activeItem === index ? "#f1f5f9" : "white",
                  borderLeftColor: award.color,
                  borderLeftWidth: activeItem === index ? "6px" : "4px",
                  transform:
                    activeItem === index ? "translateY(-5px)" : "translateY(0)",
                  boxShadow:
                    activeItem === index
                      ? `0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px ${award.color}20`
                      : "0 10px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* ヘッダー */}
                <div style={cardHeaderStyle}>
                  <div
                    style={{
                      ...typeBadgeStyle,
                      backgroundColor:
                        activeItem === index ? award.color : `${award.color}20`,
                      color: activeItem === index ? "white" : award.color,
                    }}
                  >
                    {getTypeLabel(award.type)}
                  </div>
                  <div
                    style={{
                      ...dateStyle,
                      color: activeItem === index ? "#64748b" : "#64748b",
                    }}
                  >
                    {award.date}
                  </div>
                </div>

                {/* タイトル */}
                <h3
                  style={{
                    ...awardTitleStyle,
                    color: activeItem === index ? award.color : "#1e293b",
                  }}
                >
                  {award.title}
                </h3>
                <p
                  style={{
                    ...awardSubtitleStyle,
                    color: activeItem === index ? "#64748b" : "#64748b",
                  }}
                >
                  {award.subtitle}
                </p>

                {/* リンク */}
                <div style={linksContainerStyle}>
                  {award.links.map((link, linkIndex) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...linkButtonStyle,
                        borderColor: award.color,
                        color: award.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = award.color;
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = award.color;
                      }}
                    >
                      <span style={linkIconStyle}>🔗</span>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: "80px 20px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  position: "relative",
  overflow: "hidden",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1000px",
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
  background: "linear-gradient(120deg, #ff6b6b, #4ecdc4)",
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

const timelineStyle: React.CSSProperties = {
  position: "relative",
  paddingLeft: "60px",
};

const timelineLineStyle: React.CSSProperties = {
  position: "absolute",
  left: "30px",
  top: "40px",
  bottom: "40px",
  width: "4px",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))",
  borderRadius: "2px",
};

const timelineItemStyle: React.CSSProperties = {
  position: "relative",
  marginBottom: "40px",
  display: "flex",
  alignItems: "flex-start",
  opacity: 0,
  transform: "translateX(-50px)",
  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
};

const timelineDotStyle: React.CSSProperties = {
  position: "absolute",
  left: "-45px",
  top: "20px",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  zIndex: 2,
};

const dotIconStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "white",
  borderRadius: "16px",
  padding: "30px",
  borderLeft: "4px solid",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  width: "100%",
  marginLeft: "20px",
};

const cardHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const typeBadgeStyle: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: "12px",
  fontSize: "0.8rem",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const dateStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#64748b",
  fontWeight: "500",
};

const awardTitleStyle: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: "600",
  margin: "0 0 8px 0",
  lineHeight: 1.3,
  transition: "color 0.3s ease",
};

const awardSubtitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#64748b",
  margin: "0 0 20px 0",
  lineHeight: 1.4,
};

const linksContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const linkButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 16px",
  borderRadius: "8px",
  border: "2px solid",
  fontSize: "0.9rem",
  fontWeight: "600",
  textDecoration: "none",
  transition: "all 0.3s ease",
  backgroundColor: "transparent",
};

const linkIconStyle: React.CSSProperties = {
  fontSize: "0.8rem",
};
