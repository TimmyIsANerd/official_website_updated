import React, { useState } from 'react';
import { Column, Container } from '../GlobalStyle.style';
import NavLink from './NavLink';
import { FiExternalLink } from 'react-icons/fi';
import { FooterScroll, FooterWrapper } from '../styles/Footer.style';
import { FiChevronsUp } from 'react-icons/fi';
import Button from './Button';
const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset <= 80 ? false : true);
    return () => (window.onscroll = null);
  };
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
          <FooterScroll
            to="banner"
            smooth={true}
            spy={true}
            exact="true"
            duration={500}
          >
            {isScrolled && <Button icon={<FiChevronsUp />} />}
          </FooterScroll>
        </FooterWrapper>
      </Container>
    </>
  );
};

export default Footer;
