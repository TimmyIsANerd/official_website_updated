import styled from 'styled-components';
import { Column, Typography } from '../GlobalStyle.style';

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  align-items: center;
  position: relative;

  ${Column} {
    padding-top: 20px;
    &:first-child {
      ${Typography} {
        max-width: 600px;
      }
    }
    p {
      max-width: 30ch !important;
      margin-left: 5px;
      margin: 5px 0 15px 5px;
      /* margin-top: -33px; */
    }
    a {
      display: flex;
      width: max-content;
    }
    &:last-child {
      margin-top: -80px;
      img {
        width: 100%;
        height: 450px;
        object-fit: contain;
      }
    }
  }

  //Galaxy S9/S9+ 360x740 || iPhone 8, 7, 6S, 6 375x667
  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column;
    min-height: 100vh;
    ${Column} {
      padding-top: 60px;
      &:first-child {
        ${Typography} {
          max-width: 12ch;
          font-size: 35px;
          line-height: 50px;
        }
      }
      p {
        max-width: 35ch !important;
        margin: 5px 0 15px 0px;
        /* margin-top: -33px; */
        font-size: 20px !important;
        line-height: 30px !important;
      }
      &:last-child {
        margin-top: -40px;
        img {
          width: 100%;
          height: 300px;
          object-fit: contain;
        }
      }
    }
  }
  // 393x786 411x731 414x736
  @media screen and (min-width: 376px) and (max-width: 480px) {
    flex-direction: column;
    min-height: 100vh;
    ${Column} {
      padding-top: 50px;
      &:first-child {
        ${Typography} {
          max-width: 100%;
          font-size: 40px;
          line-height: 60px;
        }
      }
      p {
        max-width: 30ch !important;
        margin: 5px 0 15px 5px;
        /* margin-top: -33px; */
        font-size: 25px !important;
        line-height: 30px !important;
      }
      a {
        display: flex;
        width: max-content;
      }
      &:last-child {
        margin-top: -50px;
        img {
          width: 100%;
          height: 300px;
          object-fit: contain;
        }
      }
    }
  }
  //iPad 768x1024
  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    ${Column} {
      padding-top: 50px;
      h1 {
        max-width: 600px;
        font-size: 65px !important;
      }
      p {
        max-width: 100%;
        margin: 5px 0 15px 5px;
        /* margin-top: -33px; */
        font-size: 26px !important;
        line-height: 30px !important;
      }
      &:last-child {
        margin-top: -50px;
      }
    }
  }
  // Medium Screen 1024x800
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    h1 {
      margin-left: 20px;
    }
    p {
      margin-left: 30px !important;
    }
    a {
      margin-left: 30px;
    }
  }
`;

export const ImageWrapper = styled.div``;
