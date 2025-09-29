/* Color Pallet */

export const neutral = {
  White: "#FFFFFF",
  Grey1: "#FFF8F6",
  Grey2: "#E5DBDF",
  Grey3: "#BFB2C0",
  Grey4: "#775566",
  Grey5: "#332233",
  Grey6: "#221122",
  Black: "#000000",
  Text: "#111111",
} as const;

export const brand = {
  Primary: "#FEFBF7",
  Secondary: "#0E052E",
  Accent1: "#EAC435",
  Accent2: "#B07C8C",

  // 互換性のために残しておく従来の色名（新しい色で置き換え）
  OffWhite: "#FEFBF7", // brand.Primary と同じ
  Indigo: "#0E052E", // brand.Secondary と同じ
  TurkishRose: "#B07C8C", // brand.Accent2 と同じ
  BluePantone: "#4455FF", // themeLight.Link と同じ
  MustardYellow: "#EAC435", // brand.Accent1 と同じ
} as const;

export const themeLight = {
  Primary: brand.Primary,
  PrimaryHighContrast: "#CC3322",
  PrimaryLowContrast: "#FFDDDD",
  PrimaryHover: "#FF7766",
  PrimaryVisited: "#CC4433",

  Secondary: brand.Secondary,
  SecondaryHighContrast: "#331144",
  SecondaryLowContrast: "#EEDDFF",

  Link: "#4455FF",
  LinkHover: "#DD66FF",

  Body: neutral.Text,
  BodyLight: neutral.Grey4,
  Disable: neutral.Grey3,
  Background: "#FEFBF7",
  BackgroundHighlight: neutral.Grey1,
} as const;

export const info = {
  Success: "#668844",
  SuccessLight: "#EEFFDD",
  Error: brand.Primary,
  ErrorLight: "#FFEEEE",
  Attention: "#FFAA44",
  AttentionLight: "#FFF8DD",
} as const;

export const social = {
  GitHub: "#333",
  Discord: "#5865f2",
  Twitter: "#1da1f2",
  YouTube: "#ff0000",
} as const;

export const ui = {
  Blue: "#60a5fa",
  Green: "#34d399",
} as const;
