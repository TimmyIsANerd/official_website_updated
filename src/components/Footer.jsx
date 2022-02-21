import React from 'react'
import styled from 'styled-components'
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 30px 72px;

    @media screen and (max-width:900px){
    padding: 25px;
}
`

const Div = styled.div` 
display: flex;
align-items: center;
justify-content: flex-start;


@media screen and (max-width:900px){
    flex-direction: column;
    align-items: center;
}
`
const FooterLink = styled(Link)` 
border-right: 2px solid rgba(18, 30, 73, 0.5);
margin: 0 20px;
padding-right:  10px;
text-decoration: none;
display: flex;
align-items: center;
color: rgba(18, 30, 73, 0.5);
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 150%;
transition: all 0.1s ease-in;

@media screen and (max-width:900px){
    border: none;
    margin: 10px 0;
}

.icon{
    margin-left: 20px;
}

&:hover{
    color: #4500A0;

}
`

function Footer() {
  return (
    <Container>
        <Div>
            <FooterLink to='#'>Ecosystem  <FiExternalLink className='icon'/></FooterLink>
            <FooterLink  to='#'>Careers  <FiExternalLink className='icon'/></FooterLink>
            <FooterLink  to='#'>Blog  <FiExternalLink className='icon'/></FooterLink>
            <FooterLink  to='#'>Support  <FiExternalLink className='icon'/></FooterLink>
        </Div>
    </Container>
  )
}

export default Footer