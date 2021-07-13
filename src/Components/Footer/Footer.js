import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StyledFooter>Copyright © 2021 Muhammad Nauman</StyledFooter>;
};
const StyledFooter = styled.footer`
  width: 100%;
  padding: 10px;
  margin-top: 50px;
  font-size: 15px;
  background-color: var(--background-color-2);
  text-align: center;
`;

export default Footer;
