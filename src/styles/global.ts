import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #100E1D;
    --background-alt: #1E213A;
    --text-dark: #110E3C;
    --text: #E7E7EB;
    --text-alt: #A09FB1;
    --text-alt-2: #88869D;
    --border: #616475;
    --button: #6E707A;
    --blue: #3C47E9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    color: var(--text);
    background-color: var(--background);
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  img {
    width: 100%;
  }
`;
