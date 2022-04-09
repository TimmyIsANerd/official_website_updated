import React from 'react';
import { Column, Container, Typography } from '../GlobalStyle.style';
import { BannerWrapper, ImageWrapper } from '../styles/Banner.style';
import Image from '../components/Image';
import { Bg_coin } from '../assets';

const Banner = () => {
  return (
    <>
      <Container>
        <BannerWrapper>
          <Column flex="0.6" data-aos="zoom-in" data-aos-duration="1500">
            <Typography
              as="h1"
              fontSize="58px"
              lineHeight="70px"
              color="#fff"
              heading
            >
              One-Click, More Swaps, Less Fees.
            </Typography>
            <Typography
              as="p"
              fontSize="20px"
              letterSpacing="0.065em"
              lineHeight="26px"
              color="rgba(255,255,255,1)"
            >
              {' '}
              Decentralized exchange with extra powers. Swap two tokens for one.
            </Typography>
          </Column>
          <Column>
            <ImageWrapper>
              <Image img={Bg_coin} alt="3swap" />
            </ImageWrapper>
          </Column>
        </BannerWrapper>
      </Container>
    </>
  );
};

export default Banner;
