import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */

    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-button {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 1 5px #90EE90;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(220, 220, 220, 0.5);
      border-radius: 50px;
    }
}//! GlobalStyle
`;