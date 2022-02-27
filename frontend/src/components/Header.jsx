import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../GlobalStyle.style';
import Logo from '../assets/logo_1.png';
import Logo_Black from '../assets/logo.png';
import Button from './Button';
import NavLink from './NavLink';
import Image from './Image';
import ToggleDarkMode from './Toggle';

const Nav = styled.nav`
  /* background: #101522; */
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  transition: all 0.3s ease;

  .container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }
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

const Toggle = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: relative;
    width: 40px;
    height: 40px;
    background: #4500a0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;

    span {
      position: absolute;
      width: 25px;
      height: 3px;
      left: 8px;
      background: #fff;
      border-radius: 3px;
      transition: 0.5s;
      &:nth-child(1) {
        transform: translateY(-8px);
        width: 15px;
        left: 8px;
      }
      &:nth-child(2) {
        transform: translateY(8px);
        width: 15px;
        left: 20px;
      }
    }
    &.active {
      span {
        &:nth-child(3) {
          transform: translateX(40px);
        }
        &:nth-child(1) {
          width: 25px;
          transform: translateY(0px) rotate(45deg);
          transition-delay: 0.125s;
        }
        &:nth-child(2) {
          width: 25px;
          transform: translateX(-12px) rotate(315deg);
          transition-delay: 0.125s;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
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
    background: ${({ theme }) => theme.body};
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

const MenuIcon = styled.div`
  display: none;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
  }
  //iPad 768x1024
  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 30px;
    display: flex;
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
              {!isScrolled ? (
                <Image src={Logo} alt="logo" />
              ) : (
                <Image src={Logo_Black} alt="logo" style={{ width: '120px' }} />
              )}
            </Link>
          </NavLogo>
          <div className="container">
            <MenuIcon>
              <Toggle className={click && 'active'} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </Toggle>
            </MenuIcon>
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
            <ToggleDarkMode />
          </div>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
