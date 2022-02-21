import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../GlobalStyle.style';
import Logo from '../assets/logo_1.png';
import Button from './Button';
import NavLink from './NavLink';
import Image from './Image';

const Nav = styled.nav`
  /* background: #101522; */
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  transition: all 0.3s ease;
  //Galaxy S9/S9+ 360x740 || iPhone 8, 7, 6S, 6 375x667
  @media screen and (min-width: 320px) and (max-width: 375px) {
    &.scrolled {
      background: #fff;
    }
    position: fixed;
  }
  // 393x786 411x731 414x736
  @media screen and (min-width: 376px) and (max-width: 480px) {
    &.scrolled {
      background: #fff;
    }
    position: fixed;
  }
  //iPad 768x1024
  @media screen and (min-width: 481px) and (max-width: 768px) {
    &.scrolled {
      background: #fff;
    }
    position: fixed;
  }
`;
export const NavLogo = styled.div`
  margin-top: 10px;
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding-left: 20px;
  }
`;
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    /* justify-content: center; */
    padding-top: 50px;
    position: fixed;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    z-index: 9999;
    transition: all 0.5s ease;
    background: rgba(255, 255, 255, 1);
  }
`;
const NavItem = styled.li`
  height: 80px;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 768px) {
      text-align: center;
      padding: 1rem;
      width: 100%;
      display: flex;
      justify-content: center;

      &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset <= 80 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      <Nav>
        <NavbarContainer className={isScrolled ? 'scrolled' : ''}>
          <NavLogo>
            <Link to="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink url="/" label="About Us" />
            </NavItem>
            <NavItem>
              <NavLink url="/" label="Features" />
            </NavItem>
            <NavItem>
              <NavLink url="/" label="White paper" />
            </NavItem>
            <NavItem>
              <Link to="/app">
                <Button
                  label="Launch App"
                  borderRadius="0px"
                  color="#fff"
                  bgColor="#000"
                  margin="0px 10px"
                />
              </Link>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
