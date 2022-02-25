import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa'
import Button from './Button';

const Container = styled.div` 
position: sticky;
top: 0;
z-index: 999; 
padding: 10px 72px;
display: flex;
align-items: center; 
 justify-content: space-between;
box-shadow: 0px 5.20673px 72.8942px rgba(0, 0, 0, 0.12);



@media screen and (max-width: 900px){
padding: 10px ;
display: block;
/* background: #FFFFFF; */
box-shadow: 0px 5.20673px 72.8942px rgba(0, 0, 0, 0.12);

}
`
const Div1 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 900px){
padding: 0px 15px;

}


`
const LogoWrap = styled(Link)` `
const Log = styled.img` 
height: 39px;
`
const Div2 = styled.div`
`
const NavMenu = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
transition: all ease-in 1000ms;


@media screen and (max-width: 900px){
    background-color: whitesmoke;
    z-index: 999;
width: 100%;
top: 65px;
position: absolute;
   flex-direction: column;
   justify-content:flex-start;
   align-items: center;
   height: 100vh;
   padding: 15px 0;
   left: ${({click}) => (click ? 0 : '-100%')};
  
     transition: all 0.5s ease;
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

@media screen and (max-width: 900px){
    justify-content: flex-start;
margin: 35px 0;
   align-items: flex-start;
}

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
    font-size: 28px;
  }
`



function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)


    return (

    <Container>
      
        <Div1>
            <LogoWrap to='/'>
                <Log src={Logo}/>
            </LogoWrap>
            <Div3 onClick={handleClick}> 
            {click ? <FaTimes   className='icon' /> : <FaBars   className='icon' />}
          
        </Div3>
        </Div1>
        <Div2>
            <NavMenu onClick={handleClick} click={click}>
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
      
    </Container>
    );
}

export default Navbar;
