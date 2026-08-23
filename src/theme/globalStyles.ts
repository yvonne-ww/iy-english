import { colors, typography, spacing, borderRadius, transitions } from './colors';

export const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${typography.fontFamily};
    background-color: ${colors.background};
    color: ${colors.textPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    line-height: 1.5;
  }

  /* Typography */
  h1 {
    font-size: ${typography.h1.size};
    font-weight: ${typography.h1.weight};
    line-height: ${typography.h1.lineHeight};
  }

  h2 {
    font-size: ${typography.h2.size};
    font-weight: ${typography.h2.weight};
    line-height: ${typography.h2.lineHeight};
  }

  h3 {
    font-size: ${typography.h3.size};
    font-weight: ${typography.h3.weight};
    line-height: ${typography.h3.lineHeight};
  }

  h4 {
    font-size: ${typography.h4.size};
    font-weight: ${typography.h4.weight};
    line-height: ${typography.h4.lineHeight};
  }

  h5 {
    font-size: ${typography.h5.size};
    font-weight: ${typography.h5.weight};
    line-height: ${typography.h5.lineHeight};
  }

  p {
    font-size: ${typography.body1.size};
    line-height: ${typography.body1.lineHeight};
    color: ${colors.textPrimary};
  }

  /* Button Reset */
  button {
    font-family: ${typography.fontFamily};
    cursor: pointer;
    border: none;
    background: none;
    transition: all ${transitions.fast};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Input Reset */
  input, textarea, select {
    font-family: ${typography.fontFamily};
    border: none;
    outline: none;
  }

  input:focus, textarea:focus, select:focus {
    outline: 2px solid ${colors.primary};
  }

  /* Link Reset */
  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color ${transitions.fast};
  }

  a:hover {
    color: ${colors.primaryDark};
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.primary};
    border-radius: ${borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primaryDark};
  }
`;

export default globalStyles;
