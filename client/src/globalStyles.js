import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body, html {
      top:0;
      left:0;
      padding:0;
      margin:0;
      width:100vw;
      max-width:100vw;
      height:fit-content;
      padding:0;
      margin:0;
      font-family: 'Montserrat', sans-serif;
      overflow-x:hidden;
      overflow-y:auto;
    }

    #root{
      width:100%;
      height:100%;
    }

    .App{
      width:100%;
      height:100%;
    }

    ::-webkit-scrollbar {
      display:none
    }
  `;