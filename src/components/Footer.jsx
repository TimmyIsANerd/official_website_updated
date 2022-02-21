import React from 'react';
import { Column, Container } from '../GlobalStyle.style';
import NavLink from './NavLink';
import { FiExternalLink } from 'react-icons/fi';
import { FooterWrapper } from '../styles/Footer.style';
const Footer = () => {
  return (
    <>
      <Container>
        <FooterWrapper>
          <Column>
            <NavLink url="/" label="Ecosystem" icon={<FiExternalLink />} />
            <NavLink url="/" label="Careers" icon={<FiExternalLink />} />
            <NavLink url="/" label="Blog" icon={<FiExternalLink />} />
            <NavLink url="/" label="Support" icon={<FiExternalLink />} />
          </Column>
        </FooterWrapper>
      </Container>
    </>
  );
};

export default Footer;
