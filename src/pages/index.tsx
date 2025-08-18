import { css } from "@emotion/react";

const pageStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, sans-serif;
`;

const titleStyle = css`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export default function Home() {
  return (
    <div css={pageStyle}>
      <h1 css={titleStyle}>Hello, Toban LP!</h1>
    </div>
  );
}
