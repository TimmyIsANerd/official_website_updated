import React from 'react';
import styled from 'styled-components';
import Bg from '../assets/backg.png';
import CandleStick from '../assets/candlestick.png';





const Container = styled.div`
margin-top: 220px;
display: flex;
align-items: center; 
justify-content: space-between;
padding: 70px 72px;



@media screen and (max-width: 900px){
    flex-direction: column;
    margin-top: 50px;
    padding: 20px;
}
`
const Div1 = styled.div` 



@media screen and (max-width: 900px){
}


`
const Div2 = styled.div`

margin-top:60px;
background-image: url(${Bg});
background-position: top -30% right -70%;
background-repeat: no-repeat;

`
const Con = styled.div` 


`
const CandleCon = styled.img`
padding-right: 50px; 



@media screen and (max-width: 1200px){
    
    padding-right: 20px;
  width: 450px;
}
@media screen and (max-width: 900px){
    
    padding-right: 20px;
  width: 300px;
}

`



const Ab = styled.div` 
font-family: 'Kinn';
font-style: normal;
font-weight: bold;
font-size: 31px;
line-height: 150%;
`
const BigT = styled.div`
margin-top: 20px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 62px;
/* or 103% */


color: #4500A0;


@media screen and (max-width: 1200px){
    font-size: 45px;
    line-height: 50px;
}
@media screen and (max-width: 900px){
    font-size: 40px;
    line-height: 50px;
}
`
const SmallT = styled.div`
margin-top: 20px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 35px;
color: rgba(0, 0, 0, 0.7);

br{

@media screen and (max-width: 1200px){
display:none;
}
@media screen and (max-width: 600px){
display:none;
}
}

@media screen and (max-width: 1200px){
    font-size: 20px;
    line-height: 30px;
}
@media screen and (max-width: 900px){
    font-size: 16px;
    line-height: 25px;
}

`

function About() {
    return (
        <Container>
            <Div1>
                <Ab>About Us</Ab>
                <BigT>  What we are <br/> Building</BigT>
                <SmallT> 3Swap is a decentralized exchange built on various <br/> EVM-Compatible chains that allows users to swap two <br/> tokens for one with little or no fees. Asides from the <br/> perk of swapping two tokens for one, 3Swap allows <br/> liquidity providers to earn more by allowing the <br/> provision of liquidity for three tokens.
                </SmallT>
            </Div1>
            <Div2>
               <Con>
                                   <CandleCon  src={CandleStick}/>
               </Con>
            </Div2>
        </Container>
    )
}

export default About