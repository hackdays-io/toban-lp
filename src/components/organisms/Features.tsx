"use client";

import type React from "react";
import { useState, useEffect } from "react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      id: "real-time-dashboard",
      title: "リアルタイム可視化ダッシュボード",
      text: "貢献スコア推移、累計報酬、役割ヒートマップ",
      icon: "📊",
      color: "#ff6b6b",
      detailColor: "#ff5252",
    },
    {
      id: "role-based-permissions",
      title: "ロールベース権限管理",
      text: "Hats Protocol による可撤回・階層型ロール",
      icon: "🎩",
      color: "#4ecdc4",
      detailColor: "#26c6da",
    },
    {
      id: "onchain-splits",
      title: "完全オンチェーン Splits 配信",
      text: "ガス最適化済み、監査・ハイパーストラクチャ",
      icon: "💰",
      color: "#45b7d1",
      detailColor: "#42a5f5",
    },
    {
      id: "human-readable-addresses",
      title: "人に優しいアドレス",
      text: "ENS 連携で `community.eth` に直接送金",
      icon: "🏷️",
      color: "#96c93d",
      detailColor: "#8bc34a",
    },
    {
      id: "api-export",
      title: "API & Export",
      text: "REST / GraphQL、CSV、Webhook",
      icon: "🔗",
      color: "#f39c12",
      detailColor: "#e67e22",
    },
    {
      id: "self-custody-mode",
      title: "自己責任モード",
      text: "カストディアルでないため鍵管理はユーザー責任。利用規約リンクを明記。",
      icon: "🔐",
      color: "#9b59b6",
      detailColor: "#8e44ad",
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

    const element = document.getElementById("features");
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
    <section id="features" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            <span style={highlightStyle}>主な機能</span>ハイライト
          </h2>
          <p style={subtitleStyle}>プロジェクト運営を革新する6つの核心機能</p>
        </div>

        <div style={gridStyle}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              style={{
                ...featureCardStyle,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.15}s`,
                background:
                  activeFeature === index
                    ? `linear-gradient(135deg, ${feature.color}20, ${feature.detailColor}10)`
                    : "white",
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div
                style={{
                  ...iconWrapperStyle,
                  backgroundColor: `${feature.color}20`,
                  borderColor: feature.color,
                }}
              >
                <div
                  style={{
                    ...iconContainerStyle,
                    backgroundColor: feature.color,
                    transform:
                      activeFeature === index
                        ? "scale(1.1) rotate(5deg)"
                        : "scale(1)",
                  }}
                >
                  <span style={iconStyle}>{feature.icon}</span>
                </div>
              </div>

              <div style={contentWrapperStyle}>
                <h3
                  style={{
                    ...featureTitleStyle,
                    color: activeFeature === index ? feature.color : "#1e293b",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    ...featureTextStyle,
                    color: activeFeature === index ? "white" : "#64748b",
                  }}
                >
                  {feature.text}
                </p>
              </div>

              <div
                style={{
                  ...progressBarStyle,
                  background:
                    activeFeature === index ? feature.color : "#e2e8f0",
                }}
              >
                <div
                  style={{
                    ...progressFillStyle,
                    width: activeFeature === index ? "100%" : "0%",
                    backgroundColor: feature.detailColor,
                  }}
                />
              </div>

              {/* 背景装飾 */}
              <div style={backgroundDecorStyle}>
                <div
                  style={{
                    ...decorCircle1Style,
                    backgroundColor: `${feature.color}10`,
                    transform:
                      activeFeature === index ? "scale(1.2)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    ...decorCircle2Style,
                    backgroundColor: `${feature.color}05`,
                    transform:
                      activeFeature === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
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
  background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
  color: "white",
  position: "relative",
  overflow: "hidden",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  position: "relative",
  zIndex: 1,
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

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
  maxWidth: "1000px",
  margin: "0 auto",
};

const featureCardStyle: React.CSSProperties = {
  padding: "40px 30px",
  borderRadius: "24px",
  backgroundColor: "white",
  border: "1px solid #e2e8f0",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  opacity: 0,
  transform: "translateY(50px)",
};

const iconWrapperStyle: React.CSSProperties = {
  width: "80px",
  height: "80px",
  borderRadius: "20px",
  border: "2px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "25px",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
};

const iconContainerStyle: React.CSSProperties = {
  width: "60px",
  height: "60px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
};

const iconStyle: React.CSSProperties = {
  fontSize: "1.8rem",
  filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3))",
};

const contentWrapperStyle: React.CSSProperties = {
  marginBottom: "25px",
};

const featureTitleStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  fontWeight: "600",
  margin: "0 0 15px 0",
  lineHeight: 1.3,
  transition: "color 0.3s ease",
};

const featureTextStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.6,
  margin: 0,
  transition: "color 0.3s ease",
};

const progressBarStyle: React.CSSProperties = {
  height: "4px",
  borderRadius: "2px",
  overflow: "hidden",
  transition: "background-color 0.3s ease",
};

const progressFillStyle: React.CSSProperties = {
  height: "100%",
  borderRadius: "2px",
  transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
};

const backgroundDecorStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
  overflow: "hidden",
};

const decorCircle1Style: React.CSSProperties = {
  position: "absolute",
  top: "-40px",
  right: "-40px",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  transition: "transform 0.4s ease",
};

const decorCircle2Style: React.CSSProperties = {
  position: "absolute",
  bottom: "-60px",
  left: "-60px",
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  transition: "transform 0.4s ease",
};
