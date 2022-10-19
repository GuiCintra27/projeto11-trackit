import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    --white: #FFFFFF;
    --lightBlue: #52B6FF;
    --darkBlue: #126BA5;
    --lightGray: ##EBEBEB;
    --mediumGray: #CFCFCF;
    --body-bg-color: #F2F2F2;
    --stroke: #D4D4D4;
    --darkGray: #666666;
    --textDisabled:  #DBDBDB;
    --noncompletedHabit: #E7E7E7;
    --defaultSubtitle: #BABABA;
    --completedHabit: #8FC549;
  }

  html{
    font-size: 62.5%;
  }

  img {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  body {
    width: 100vw;
    color: var(--black);
    font-family: 'Lexend Deca', sans-serif;
    font-size: clamp(14px, 1.6rem, 2vw);
    background: var(--body-bg-color);
    /* font-family: 'Playball', cursive;*/
  }
`;

export default GlobalStyle;