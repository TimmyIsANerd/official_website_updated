import styled from 'styled-components';
import { Column, Typography } from '../GlobalStyle.style';

export const AboutWrapper = styled.div`
  width: 100%;
  height: 80vh;
  /* margin-bottom: 200px; */
  display: flex;

  ${Column} {
    &:first-child {
      ${Typography} {
        &:nth-child(1) {
          margin-left: 2px;
        }
        &:nth-child(2) {
          max-width: 10ch;
          &::first-letter {
            margin-left: -3px;
          }
        }
        &:nth-child(3) {
          max-width: 600px;
          margin: 20px 0px 0px 5px;
        }
      }
    }
    &:last-child {
      position: relative;

      &::before {
        content: '';
        background: #bc29e0;
        width: 250px;
        height: 250px;
        left: 150px;
        top: 20px;
        border-radius: 50%;
        position: absolute;
        filter: contrast(100%) blur(150px);
      }
      img {
        height: 350px;
        width: 100%;
        position: absolute;
        left: -40px;
        top: -20px;
        object-fit: contain;
      }
    }
  }
  //Galaxy S9/S9+ 360x740 || iPhone 8, 7, 6S, 6 375x667
  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column;
    height: 100vh;
    ${Column} {
      h2 {
        margin-left: 2px;
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
      h1 {
        font-size: 40px;
        line-height: 55px;
      }
      &:last-child {
        position: relative;

        &::before {
          display: none;
        }
        img {
          height: 300px;
          position: relative;
        }
      }
    }
  }
  // 393x786 411x731 414x736
  @media screen and (min-width: 376px) and (max-width: 480px) {
    flex-direction: column;
    height: 100vh;
    ${Column} {
      h2 {
        margin-left: 2px;
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
      h1 {
        font-size: 40px;
        line-height: 55px;
      }
      &:last-child {
        position: relative;

        &::before {
          display: none;
        }
        img {
          height: 300px;
          position: relative;
        }
      }
    }
  }
  //iPad 768x1024
  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    height: 80vh;
    width: 95%;
    margin: 0px auto;
    ${Column} {
      h2 {
        margin-left: 2px;
        font-size: 16px;
      }
      p {
        font-size: 20px;
        line-height: 30px;
        max-width: 100%;
      }
      h1 {
        font-size: 5rem !important;
        line-height: 80px;
      }
      &:last-child {
        position: relative;

        &::before {
          display: none;
        }
        img {
          height: 400px;
          position: relative;
        }
      }
    }
  }
  // Medium Screen 1024x800
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding-top: 80px;
    p {
      font-size: 20px;
      line-height: 35px;
    }
    h1 {
      font-size: 4rem;
      line-height: 75px;
    }
  }
`;
