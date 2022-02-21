import React from 'react'
import styled from 'styled-components'
import { FiExternalLink } from 'react-icons/fi';
import GlobalStyle from '../Globalstyle';
import {
  FaDiscord,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div` 
padding: 70px 72px;

@media screen and (max-width:900px){
  padding: 20px;
}

`
const Feat = styled.div`
margin-bottom: 20px;
color:  #121E49;

font-family: Poppins;
font-size: 31px;
font-style: normal;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: left;

@media screen and (max-width:900px){
  font-size: 27px;
}

`
const Con = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:900px){
  flex-direction: column;
}

`
const Div1 = styled.div`
    min-height: 440px;
    padding: 30px 40px;
    margin-right: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    position: relative;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
flex: 1;


@media screen and (max-width:900px){
  padding: 20px;
  margin: 0;
}

`
const Tet = styled.div`
margin-top: 20px;
color:  #4500A0;

font-family: Kinn;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: 60px;
letter-spacing: 0em;
text-align: left;

@media screen and (max-width:900px){
  font-size: 32px;
  line-height: 30px;
}


`
const Pip = styled.div`
margin-top: 30px;


  
`
const Div2 = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 26px;

@media screen and (max-width:900px){
  margin: 0;
  margin-top: 15px;
}
`
const Links = styled.div` 
margin-top: 100px;

@media screen and (max-width:900px){
  margin-top: 50px;
}

`
const SocialLinks = styled(Link)` 
text-decoration: none;
color: black;

.icon{
  font-size: 35px;
  margin-right: 25px;

  @media screen and (max-width:900px){
  margin-right: 18px;
}
}


`
const Sub1 = styled.div`
margin-bottom: 15px;
border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    position: relative;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
padding: 20px 30px;

@media screen and (max-width:900px){
  padding: 20px;
}
`
const Tit = styled.div`
padding-right: 40px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: Poppins ;
font-weight: 600;
font-style: normal;
font-size: 16px;
color: #4500A0;
line-height :31.5px;

@media screen and (max-width:900px){
 padding: 0;
}

`
const Det = styled.div`
max-width: 40ch;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 31px;
color: #1F1F1F;

@media screen and (max-width:900px){
  line-height: 26px;
}

`


function Features() {
  return (
    <Container>
      <GlobalStyle/>
        <Feat>Features</Feat>
        <Con>
            <Div1>
            <Tet>
            We are a community <br/>based project
            </Tet>
            <Pip>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy 
            </Pip>
            <Links>
            <SocialLinks to='#'>
            <FaTwitter className='icon'/>
            </SocialLinks>
            <SocialLinks to='#'>
            <  FaFacebookF  className='icon'/>
            </SocialLinks>
            <SocialLinks to='#'>
            <    FaDiscord  className='icon'/>
            </SocialLinks>
            <SocialLinks to='#'>
            <  FaTelegramPlane  className='icon'/>
            </SocialLinks>
            </Links>
            </Div1>
            <Div2>
                <Sub1>
                  <Tit>Read our whitepaper   <FiExternalLink/></Tit>
                  <Det>lorem Ipsum is simply dummy text of the printing dummy text of.</Det>
                </Sub1>
                <Sub1>
                  <Tit>Investors note  <FiExternalLink/></Tit>
                  <Det>lorem Ipsum is simply dummy text of the printing dummy text of.</Det>
                </Sub1>
                <Sub1>
                  <Tit>Events <FiExternalLink/></Tit>
                  <Det>lorem Ipsum is simply dummy text of the printing dummy text of.</Det>
                </Sub1>
                
            </Div2>
        </Con>

    </Container>
  )
}

export default Features