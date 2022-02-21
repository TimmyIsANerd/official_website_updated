import React from 'react';
import Coin from '../assets/coin.png';
import { Column, Container, Typography } from '../GlobalStyle.style';
import { BannerWrapper, ImageWrapper } from '../styles/Banner.style';
import Image from '../components/Image';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <Container>
        <BannerWrapper>
          <Column flex="0.6">
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
            <Link to="/app">
              <Button
                label="Launch App"
                bgColor="#000"
                color="#fff"
                borderRadius="0px"
                margin="20px 0"
                padding="13px 25px"
              />
            </Link>
          </Column>
          <Column>
            <ImageWrapper>
              <Image img={Coin} alt="3swap" />
            </ImageWrapper>
          </Column>
        </BannerWrapper>
      </Container>
    </>
  );
};

export default Banner;
