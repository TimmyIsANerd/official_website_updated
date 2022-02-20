import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import {FaBars} from 'react-icons/fa'
import Button from './Button';

const Container = styled.div` 
position: sticky;
top: 0;
z-index: 999;
padding: 10px 72px;
display: flex;
align-items: center;
justify-content: space-between;
/* box-shadow: 0px 5.20673px 72.8942px rgba(0, 0, 0, 0.12); */



@media screen and (max-width: 900px){
    padding: 10px 20px
}
`
const Div1 = styled.div` `
const LogoWrap = styled(Link)` `
const Log = styled.img` 
height: 39px;
`
const Div2 = styled.div``
const NavMenu = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
transition: all ease-in 1000ms;


@media screen and (max-width: 900px){
    display: none;
}


`
const NavLinks = styled(Link)`
margin-left: 37px;
text-decoration: none;
font-size: 16px;
font-family: poppins;
line-height: 24px;
font-weight: 500;
color: #121E49BF;
font-style: normal;

&:hover{
    color: #4500A0;
}

`
const SpecNavLink = styled(Link)`
margin-left: 37px;
text-decoration: none;
font-size: 14px;
font-family: poppins;
line-height: 24px;
font-weight: 500;
background: #4500A0;
border-radius: 40px;
color: #FFFFFF;
padding: 7px 15px;
font-style: normal;


`

const Div3 = styled.div`
display: none;
color: #4500A0;
transition: all ease-out 1000ms;
cursor:pointer;




@media screen and (max-width:900px){
    display: block;
}
  .icon{
    font-size: 25px;
  }
`



function Navbar() {
    return (
    <Container>
      
        <Div1>
            <LogoWrap to='/'>
                <Log src={Logo}/>
            </LogoWrap>
        </Div1>
        <Div2>
            <NavMenu>
                <NavLinks to='#'>About Us</NavLinks>
                <NavLinks to='#'>Features</NavLinks>
                <NavLinks to='#'>White paper</NavLinks>

                <Button
              label="Launch App"
              borderRadius="5px"
              color="#fff"
              bgColor="#000"
              padding = "16px 25px"
              margin="0px 30px"
              fontSize = "16px"
            />
               
               
            </NavMenu>
        </Div2>
        <Div3>
            <FaBars className='icon'/>
        </Div3>
    </Container>
    );
}

export default Navbar;
