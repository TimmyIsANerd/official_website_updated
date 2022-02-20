import React from 'react';
import styled from 'styled-components';
import Coin from '../assets/coin.png';

const Container = styled.div`
  padding-top: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    padding-top: 30px;

    background-position: top 30% right 30%;
  }
  @media screen and (max-width: 700px) {
    background-position: top 30% right 50%;
    flex-direction: column;
  }
`;
const Div1 = styled.div`
  padding: 70px 72px;
  z-index: 999;

  @media screen and (max-width: 900px) {
    padding: 20px;
  }
`;
const BigT = styled.div`
  color: #ffffff;
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: 0em;
  text-align: left;
`;
const SmallT = styled.div`
  color: #ffffff;
  margin-top: 20px;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0.065em;
  text-align: left;

  br {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 15px;
    line-height: 25px;
    margin-top: 10px;
  }
`;
const Div2 = styled.div`
  padding-right: 50px;
  z-index: 999;
`;
const CoinImg = styled.img``;

const Btn = styled.button`
  margin-top: 20px;
  background: #4500a0;
  padding: 16px 20px;
  border-radius: 33px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    padding: 10px 15px;
    font-size: 15px;
  }
`;

function Banner() {
  return (
    <Container>
      <Div1>
        <BigT>
          One-Click, More <br /> Swaps, Less Fees.
        </BigT>
        <SmallT>
          Decentralized exchange with <br /> extra powers. Swap two tokens{' '}
          <br />
          for one.
        </SmallT>
        <Btn>Presale Information</Btn>
      </Div1>
      <Div2>
        <CoinImg src={Coin} />
      </Div2>
    </Container>
  );
}

export default Banner;
