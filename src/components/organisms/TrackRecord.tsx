"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

export default function TrackRecord() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0]);
  const [isMobile, setIsMobile] = useState(true); // 初期値をtrueに設定してSSR時にパルスを無効化
  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>([null, null, null]);

  const records = [
    {
      id: "total-value",
      metric: "累計流通額",
      value: "¥125,000,000 相当",
      numericValue: 125000000,
      suffix: " 相当",
      prefix: "¥",
      icon: "💰",
      color: "#10b981",
    },
    {
      id: "organizations",
      metric: "導入組織数",
      value: "34 DAO / NPO / 地域団体",
      numericValue: 34,
      suffix: " DAO / NPO / 地域団体",
      prefix: "",
      icon: "🏢",
      color: "#3b82f6",
    },
    {
      id: "transactions",
      metric: "処理 Tx",
      value: "18,420 Tx",
      numericValue: 18420,
      suffix: " Tx",
      prefix: "",
      icon: "⚡",
      color: "#f59e0b",
    },
  ];

  const animateNumber = useCallback(
    (finalValue: number, index: number, duration = 2000) => {
      let startValue = 0;
      const increment = finalValue / (duration / 50);

      const intervalId = intervalRefs.current[index];
      if (intervalId) {
        clearInterval(intervalId);
      }

      intervalRefs.current[index] = setInterval(() => {
        startValue += increment;
        if (startValue >= finalValue) {
          startValue = finalValue;
          const intervalId = intervalRefs.current[index];
          if (intervalId) {
            clearInterval(intervalId);
          }
          intervalRefs.current[index] = null;
        }
        setAnimatedNumbers((prev) => {
          const newNumbers = [...prev];
          newNumbers[index] = Math.floor(startValue);
          return newNumbers;
        });
      }, 50);
    },
    [],
  );

  const formatNumber = (num: number, index: number) => {
    const record = records[index];
    if (index === 0) {
      // 累計流通額
      return `${record.prefix}${num.toLocaleString()}`;
    }
    if (index === 2) {
      // 処理 Tx
      return num.toLocaleString();
    }
    return num.toString();
  };

  useEffect(() => {
    // より確実なモバイル判定
    const checkMobile = () => {
      const isMobileWidth = window.innerWidth <= 768;
      const isMobileUserAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // いずれかの条件が満たされればモバイルとして判定
      setIsMobile(isMobileWidth || isMobileUserAgent || isTouchDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // アニメーション開始（少し遅延を付けて順次実行）
          records.forEach((record, index) => {
            setTimeout(() => {
              animateNumber(record.numericValue, index);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("track-record");
    if (element) {
      observer.observe(element);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (element) {
        observer.unobserve(element);
      }
      // クリーンアップ
      for (const interval of intervalRefs.current) {
        if (interval) clearInterval(interval);
      }
    };
  }, [animateNumber, isVisible]); // 依存配列を正しく設定

  return (
    <section id="track-record" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            <span style={highlightStyle}>トラックレコード</span>
            <br />
            <span style={periodStyle}>（2024-06→現在）</span>
          </h2>
        </div>

        <div style={gridStyle}>
          {records.map((record, index) => (
            <div
              key={record.id}
              style={{
                ...cardStyle,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.9)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.2}s`,
                borderColor: `${record.color}30`,
              }}
            >
              <div
                style={{
                  ...iconContainerStyle,
                  backgroundColor: `${record.color}20`,
                  borderColor: record.color,
                }}
              >
                <span style={iconStyle}>{record.icon}</span>
              </div>

              <div style={contentStyle}>
                <p style={metricStyle}>{record.metric}</p>
                <h3
                  style={{
                    ...valueStyle,
                    color: record.color,
                  }}
                >
                  {formatNumber(animatedNumbers[index], index)}
                  <span style={suffixStyle}>{record.suffix}</span>
                </h3>
              </div>

              <div
                style={{
                  ...progressBarStyle,
                  backgroundColor: `${record.color}20`,
                }}
              >
                <div
                  style={{
                    ...progressFillStyle,
                    backgroundColor: record.color,
                    width: isVisible ? "100%" : "0%",
                    transitionDelay: `${index * 0.2 + 0.5}s`,
                  }}
                />
              </div>

              {/* パルスエフェクト（モバイルでは非表示） */}
              {isVisible && !isMobile && (
                <div
                  style={{
                    ...pulseStyle,
                    backgroundColor: `${record.color}30`,
                    animation: `pulse 2s ease-in-out infinite ${index * 0.5}s`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div style={noteContainerStyle}>
          <p style={noteStyle}>
            💡 注：実データは on-chain から自動取得し動的更新に。
          </p>
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: "80px 20px",
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
  color: "white",
  position: "relative",
  overflow: "hidden",
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
  margin: 0,
  lineHeight: 1.2,
};

const highlightStyle: React.CSSProperties = {
  background: "linear-gradient(120deg, #10b981, #3b82f6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const periodStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "400",
  color: "rgba(255, 255, 255, 0.8)",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "40px",
  maxWidth: "1000px",
  margin: "0 auto",
  marginBottom: "60px",
};

const cardStyle: React.CSSProperties = {
  padding: "40px",
  borderRadius: "24px",
  background: "rgba(255, 255, 255, 0.05)",
  border: "2px solid",
  backdropFilter: "blur(10px)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  opacity: 0,
  transform: "translateY(50px) scale(0.9)",
};

const iconContainerStyle: React.CSSProperties = {
  width: "70px",
  height: "70px",
  borderRadius: "18px",
  border: "2px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "25px",
  marginLeft: "auto",
  marginRight: "auto",
};

const iconStyle: React.CSSProperties = {
  fontSize: "2rem",
  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
};

const contentStyle: React.CSSProperties = {
  marginBottom: "25px",
};

const metricStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "rgba(255, 255, 255, 0.8)",
  margin: "0 0 15px 0",
  fontWeight: "500",
  letterSpacing: "0.05em",
};

const valueStyle: React.CSSProperties = {
  fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
  fontWeight: "700",
  margin: 0,
  lineHeight: 1.2,
};

const suffixStyle: React.CSSProperties = {
  fontSize: "0.7em",
  fontWeight: "400",
  opacity: 0.8,
};

const progressBarStyle: React.CSSProperties = {
  height: "6px",
  borderRadius: "3px",
  overflow: "hidden",
};

const progressFillStyle: React.CSSProperties = {
  height: "100%",
  borderRadius: "3px",
  transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
};

const pulseStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  zIndex: -1,
};

const noteContainerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "30px",
  borderRadius: "16px",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
};

const noteStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "rgba(255, 255, 255, 0.7)",
  margin: 0,
  fontStyle: "italic",
};
