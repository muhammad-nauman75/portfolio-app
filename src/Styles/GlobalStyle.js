import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
  --background-color: #333;
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --background-dark-color: #10121A;
  --border-color: #333049;
  --background-light-color: #F1F1F1;
  --white-color: #FFF;
  --font-light-color: #a4acc4;
  --font-dark-color: #313131;
  --font-dark-color-2: #151515;
  --side-bar-dark-color: #191D2B;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1rem;
  list-style: none;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}
body{
  background-color: var(--background-dark-color);
  color: var(--font-light-color);
}
a{
  font-family: inherit;
  color: inherit;
}
.container{
  width: 80%;
  margin: auto;
}
`;
export default GlobalStyled;
