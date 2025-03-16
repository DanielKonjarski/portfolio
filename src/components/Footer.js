import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2025 My Portfolio</p>
    </FooterWrapper>
  );
};

export default Footer;
