import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;

}
#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
}

`;
export default GlobalStyled;
