import React from 'react';
import { Column, Container, Typography } from '../GlobalStyle.style';
import { AboutWrapper } from '../styles/About.style';
import Bar from '../assets/bar.png';
import Image from '../components/Image';

const About = () => {
  return (
    <>
      <Container>
        <AboutWrapper>
          <Column flex="0.6">
            <Typography
              as="h2"
              fontSize="31px"
              fontWeght="600"
              lineHeight="62px"
              color="#121E49"
            >
              About Us
            </Typography>
            <Typography
              as="h1"
              fontSize="60px"
              fontWeght="bold"
              lineHeight="61px"
              heading
              color="var(--primary-bg)"
            >
              What we are Building.
            </Typography>
            <Typography
              as="p"
              color="rgba(31, 31, 31, 0.7)"
              lineHeight="26px"
              fontSize="16px"
            >
              3Swap is a decentralized exchange built on various EVM-Compatible
              chains that allows users to swap two tokens for one with little or
              no fees. Asides from the perk of swapping two tokens for one,
              3Swap allows liquidity providers to earn more by allowing the
              provision of liquidity for three tokens.
            </Typography>
          </Column>
          <Column>
            <Image src={Bar} alt="coin" />
          </Column>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default About;
