import React from 'react';
import styled from 'styled-components';
import Bg from '../assets/backg.png';
import CandleStick from '../assets/candlestick.png';
import Lin from '../assets/linear2.png';

const Container = styled.div`
  margin-top: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;
const Div1 = styled.div`
  padding: 70px 72px;
`;
const Div2 = styled.div`
  margin-top: 60px;
  background-image: url(${Bg});
  background-position: top -30% right -70%;
  background-repeat: no-repeat;
`;
const Con = styled.div`
  background-image: url(${Lin});
`;
const CandleCon = styled.img`
  padding-right: 50px;
`;

const Ab = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 150%;
`;
const BigT = styled.div`
  margin-top: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 62px;
  /* or 103% */

  color: #4500a0;
`;
const SmallT = styled.div`
  margin-top: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;

  color: rgba(0, 0, 0, 0.7);
`;

function About() {
  return (
    <Container>
      <Div1>
        <Ab>About Us</Ab>
        <BigT>
          {' '}
          What we are <br /> Building
        </BigT>
        <SmallT>
          {' '}
          3Swap is a decentralized exchange built on various <br />{' '}
          EVM-Compatible chains that allows users to swap two <br /> tokens for
          one with little or no fees. Asides from the <br /> perk of swapping
          two tokens for one, 3Swap allows <br /> liquidity providers to earn
          more by allowing the <br /> provision of liquidity for three tokens.
        </SmallT>
      </Div1>
      <Div2>
        <Con>
          <CandleCon src={CandleStick} />
          {/* <Shad2Con  src={Shad2}/>

               <EtherCon src={Ether}/> 
               <Shad3Con  src={Shad3}/>

               <BlueCon src={Box}/> 
               <Shad1Con  src={Shad1}/>

               <SolidCon src={Solid}/>  */}
        </Con>
      </Div2>
    </Container>
  );
}

export default About;
