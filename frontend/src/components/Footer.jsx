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
            <NavLink url="/" label="Swap" icon={<FiExternalLink />} />
            <NavLink url="/" label="Liquidity" icon={<FiExternalLink />} />
            <NavLink url="/" label="Farm" icon={<FiExternalLink />} />
            <NavLink url="/" label="Stake" icon={<FiExternalLink />} />
            <NavLink url="/" label="Lend" icon={<FiExternalLink />} />
            <NavLink url="/" label="NFT" icon={<FiExternalLink />} />
            <NavLink url="/" label="Bridge" icon={<FiExternalLink />} />
            <NavLink url="/" label="Ecosystem" icon={<FiExternalLink />} />
          </Column>
        </FooterWrapper>
      </Container>
    </>
  );
};

export default Footer;
