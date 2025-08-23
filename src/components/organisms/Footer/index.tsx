"use client";

import type React from "react";
import { useState } from "react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    { id: "github", name: "GitHub", icon: "🐙", url: "#", color: "#333" },
    { id: "discord", name: "Discord", icon: "💬", url: "#", color: "#5865f2" },
    {
      id: "twitter",
      name: "X (Twitter)",
      icon: "🐦",
      url: "#",
      color: "#1da1f2",
    },
    { id: "youtube", name: "YouTube", icon: "📺", url: "#", color: "#ff0000" },
  ];

  const quickLinks = [
    { id: "docs", name: "ドキュメント", url: "#" },
    { id: "api", name: "API リファレンス", url: "#" },
    { id: "tutorial", name: "チュートリアル", url: "#" },
    { id: "community", name: "コミュニティ", url: "#" },
  ];

  const legalLinks = [
    { id: "company", name: "会社情報", url: "#" },
    { id: "terms", name: "利用規約", url: "#" },
    { id: "privacy", name: "プライバシーポリシー", url: "#" },
    { id: "security", name: "セキュリティ", url: "#" },
  ];

  const contactInfo = [
    {
      id: "support",
      label: "サポート",
      value: "support@toban.community",
      icon: "📧",
    },
    {
      id: "partnership",
      label: "パートナーシップ",
      value: "partnership@toban.community",
      icon: "🤝",
    },
  ];

  return (
    <footer style={footerStyle}>
      {/* メインフッターコンテンツ */}
      <div style={containerStyle}>
        <div style={mainContentStyle}>
          {/* ブランドセクション */}
          <div style={brandSectionStyle}>
            <div style={logoSectionStyle}>
              <h3 style={logoStyle}>Toban</h3>
              <p style={taglineStyle}>
                いちばん簡単な
                <br />
                貢献の記録と報酬の分配
              </p>
            </div>
            <p style={descriptionStyle}>
              Web3テクノロジーを活用して、コミュニティやプロジェクトの貢献を透明かつ公正に記録・分配するプラットフォームです。
            </p>

            {/* ソーシャルリンク */}
            <div style={socialSectionStyle}>
              <h4 style={sectionTitleStyle}>フォローする</h4>
              <div style={socialLinksStyle}>
                {socialLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={link.url}
                    style={{
                      ...socialLinkStyle,
                      backgroundColor:
                        hoveredLink === link.name
                          ? link.color
                          : "rgba(255, 255, 255, 0.1)",
                      color:
                        hoveredLink === link.name
                          ? "white"
                          : "rgba(255, 255, 255, 0.8)",
                      transform:
                        hoveredLink === link.name
                          ? "translateY(-2px)"
                          : "translateY(0)",
                    }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={socialIconStyle}>{link.icon}</span>
                    <span style={socialNameStyle}>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* クイックリンク */}
          <div style={linkSectionStyle}>
            <h4 style={sectionTitleStyle}>リソース</h4>
            <ul style={linkListStyle}>
              {quickLinks.map((link, index) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    style={{
                      ...linkStyle,
                      color:
                        hoveredLink === link.name
                          ? "#60a5fa"
                          : "rgba(255, 255, 255, 0.8)",
                    }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 法的情報 */}
          <div style={linkSectionStyle}>
            <h4 style={sectionTitleStyle}>法的情報</h4>
            <ul style={linkListStyle}>
              {legalLinks.map((link, index) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    style={{
                      ...linkStyle,
                      color:
                        hoveredLink === link.name
                          ? "#60a5fa"
                          : "rgba(255, 255, 255, 0.8)",
                    }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* お問い合わせ */}
          <div style={contactSectionStyle}>
            <h4 style={sectionTitleStyle}>お問い合わせ</h4>
            <div style={contactListStyle}>
              {contactInfo.map((contact, index) => (
                <div key={contact.id} style={contactItemStyle}>
                  <span style={contactIconStyle}>{contact.icon}</span>
                  <div>
                    <div style={contactLabelStyle}>{contact.label}</div>
                    <a
                      href={`mailto:${contact.value}`}
                      style={{
                        ...contactValueStyle,
                        color:
                          hoveredLink === contact.value
                            ? "#60a5fa"
                            : "rgba(255, 255, 255, 0.8)",
                      }}
                      onMouseEnter={() => setHoveredLink(contact.value)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ニュースレター */}
            <div style={newsletterStyle}>
              <h5 style={newsletterTitleStyle}>最新情報をお届け</h5>
              <div style={newsletterFormStyle}>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  style={emailInputStyle}
                />
                <button type="button" style={subscribeButtonStyle}>
                  購読
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ボトムバー */}
      <div style={bottomBarStyle}>
        <div style={containerStyle}>
          <div style={bottomContentStyle}>
            <div style={copyrightStyle}>
              <p style={copyrightTextStyle}>
                Copyleft 2025 Toban Contributors. Built with ❤️ for the
                community.
              </p>
            </div>
            <div style={statusStyle}>
              <div style={statusItemStyle}>
                <div style={statusIndicatorStyle} />
                <span style={statusTextStyle}>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
  color: "white",
  marginTop: "auto",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const mainContentStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "50px",
  padding: "80px 0 60px",
};

const brandSectionStyle: React.CSSProperties = {
  maxWidth: "400px",
};

const logoSectionStyle: React.CSSProperties = {
  marginBottom: "25px",
};

const logoStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "700",
  margin: "0 0 10px 0",
  background: "linear-gradient(120deg, #60a5fa, #34d399)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const taglineStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "rgba(255, 255, 255, 0.9)",
  margin: 0,
  fontWeight: "500",
  lineHeight: 1.4,
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "rgba(255, 255, 255, 0.7)",
  lineHeight: 1.6,
  margin: "0 0 30px 0",
};

const socialSectionStyle: React.CSSProperties = {
  marginTop: "30px",
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "rgba(255, 255, 255, 0.9)",
  margin: "0 0 20px 0",
  letterSpacing: "0.05em",
};

const socialLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
};

const socialLinkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 16px",
  borderRadius: "12px",
  textDecoration: "none",
  transition: "all 0.3s ease",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const socialIconStyle: React.CSSProperties = {
  fontSize: "1.2rem",
};

const socialNameStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  fontWeight: "500",
};

const linkSectionStyle: React.CSSProperties = {
  minWidth: "200px",
};

const linkListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  display: "block",
  padding: "8px 0",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s ease",
  borderBottom: "1px solid transparent",
};

const contactSectionStyle: React.CSSProperties = {
  minWidth: "280px",
};

const contactListStyle: React.CSSProperties = {
  marginBottom: "30px",
};

const contactItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "20px",
};

const contactIconStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  marginTop: "2px",
};

const contactLabelStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "rgba(255, 255, 255, 0.6)",
  marginBottom: "4px",
  fontWeight: "500",
};

const contactValueStyle: React.CSSProperties = {
  fontSize: "1rem",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const newsletterStyle: React.CSSProperties = {
  padding: "25px",
  borderRadius: "16px",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const newsletterTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "rgba(255, 255, 255, 0.9)",
  margin: "0 0 15px 0",
};

const newsletterFormStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
};

const emailInputStyle: React.CSSProperties = {
  flex: 1,
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  background: "rgba(255, 255, 255, 0.1)",
  color: "white",
  fontSize: "0.95rem",
};

const subscribeButtonStyle: React.CSSProperties = {
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  background: "#60a5fa",
  color: "white",
  fontSize: "0.95rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const bottomBarStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  padding: "25px 0",
};

const bottomContentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
};

const copyrightStyle: React.CSSProperties = {
  flex: 1,
};

const copyrightTextStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "rgba(255, 255, 255, 0.6)",
  margin: 0,
};

const statusStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const statusItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const statusIndicatorStyle: React.CSSProperties = {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#34d399",
  animation: "pulse 2s ease-in-out infinite",
};

const statusTextStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "rgba(255, 255, 255, 0.7)",
  fontWeight: "500",
};
