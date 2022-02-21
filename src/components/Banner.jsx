import React from 'react';
import styled from 'styled-components';
import Coin from '../assets/coin.png'
import Button from './Button'


const Container = styled.div`

padding-top:70px;
display: flex;
align-items:center;
justify-content: space-between;

@media screen and (max-width: 800px){
    padding-top:30px;


}
@media screen and (max-width: 700px){
flex-direction: column;

}
`
const Div1 = styled.div` 
z-index: 300;
padding: 70px 72px;


@media screen and (max-width: 1200px){
    padding: 20px;
}

`
const BigT = styled.div` 
    color: #FFFFFF;
font-family: Poppins;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: 80px;
letter-spacing: 0em;
text-align: left;

br{

@media screen and (max-width: 1200px){
display:none;
}
@media screen and (max-width: 600px){
display:none;
}
}

@media screen and (max-width: 1200px){
font-size:45px;
line-height: 55px;
margin-bottom: 20px;
}
@media screen and (max-width: 600px){
font-size:35px;
line-height: 50px;
}


`
const SmallT = styled.div` 
color:  #FFFFFF;
;
margin-top:20px;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 37px;
letter-spacing: 0.065em;
text-align: left;

br{

@media screen and (max-width: 1200px){
display:none;
}
@media screen and (max-width: 600px){
display:none;
}
}


@media screen and (max-width: 1200px){
    font-size: 25px;
    line-height: 30px;
    margin-top:10px;

}
@media screen and (max-width: 900px){
    font-size: 15px;
    line-height: 25px;
    margin-top:10px;

}

`
const Div2 = styled.div` 
    padding-right: 50px;
    z-index: 300;
    @media screen and (max-width: 900px){
        padding: 0;
}


`
const CoinImg = styled.img`

@media screen and (max-width: 1200px){

display: flex;
justify-content: center;
width: 400px;
}
@media screen and (max-width: 900px){

display: flex;
justify-content: center;
width: 300px;
}

`

const Btn = styled.button` 
margin-top: 20px;
background: #4500A0;
padding: 16px  20px;
border-radius: 33px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
color: #FFFFFF;
outline: none;
border: none;
cursor: pointer;

@media screen and (max-width:900px){
    padding: 10px  15px;
    font-size: 15px;

}
`

function Banner() {
  return (
    <Container>
        <Div1>
        <BigT>
            One-Click, More <br/>  Swaps, Less Fees.
            </BigT>
            <SmallT>
            Decentralized exchange with <br/>    extra powers. Swap two tokens <br/>for one. 
            </SmallT>
            <Button
              label="Presale Information"
              borderRadius="5px"
              color="#fff"
              bgColor="#000"
              padding = "16px 25px"
             margin = "30px 0 0 0"
              fontSize = "16px"
            />

        </Div1>
        <Div2>
    <CoinImg src={Coin}/>
        </Div2>

    
    </Container>
  );
}

export default Banner;
