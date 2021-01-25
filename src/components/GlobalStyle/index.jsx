import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html{
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    font-family: sans-serif;
    color: #333;
  }

  h1,
  h2,
  h3,
  p,
  button {
    margin: 10px 0;
  }

  h1 {
    font-size: 2.5rem;
    font-family: serif;
    font-weight: 400;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

`

export default GlobalStyle;