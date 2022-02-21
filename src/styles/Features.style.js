import styled from 'styled-components';
import { Column } from '../GlobalStyle.style';
import Bg from '../assets/linear_bg_2.svg';
export const FeatureWrapper = styled.section`
  /* background: url(${Bg}) no-repeat;
  background-position: right;
  background-size: contain; */
  position: relative;
  &::before {
    content: '';
    background: #bc29e0;
    width: 100px;
    border-bottom-left-radius: 80%;
    height: 100vh;
    position: absolute;
    right: 0;

    filter: blur(90px);

    @media screen and (min-width: 320px) and (max-width: 375px) {
      bottom: 0;
    }
    @media screen and (min-width: 376px) and (max-width: 480px) {
      bottom: 0;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      bottom: 0;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      bottom: 0;
      height: 100%;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .title {
      margin-left: 30px;
      font-size: 30px;
    }
  }
`;

export const FeaturesWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 90vh;
  padding: 20px 0;
  position: relative;

  ${Column} {
    .feature {
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-height: 140px;
      margin-bottom: 15px;
      padding: 20px 30px;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.3);
      p {
        max-width: 40ch;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 40px;
      }
    }
  }
  //Galaxy S9/S9+ 360x740 || iPhone 8, 7, 6S, 6 375x667
  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column;
    min-height: 100vh;
    .feature {
      border-radius: 8px;
    }
  }
  // 393x786 411x731 414x736
  @media screen and (min-width: 376px) and (max-width: 480px) {
    flex-direction: column;
    min-height: 100vh;
    .feature {
      border-radius: 8px;
    }
  }
  //iPad 768x1024
  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
    .feature {
      border-radius: 8px;
      width: 95%;
      margin: 0px auto;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    min-height: auto;
  }
`;

export const FeatureHeading = styled.div`
  min-height: 450px;
  padding: 30px 40px;
  border-radius: 30px;
  margin-right: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  position: relative;
  background: rgba(255, 255, 255, 0.2);

  border-radius: 15px;
  h1 {
    margin-top: 20px;
    &::first-letter {
      margin-left: -5px;
    }
  }
  p {
    max-width: 400px;
    margin-top: 40px;
  }
  .social__links {
    display: flex;
    position: absolute;
    bottom: 0;
    margin-bottom: 40px;

    a {
      font-size: 40px;
      margin-right: 8px;
      color: rgba(0, 0, 0, 0.3);
      transition: all 0.5s ease;
      &:hover {
        color: rgba(0, 0, 0, 1);
        transition: all 0.3s ease;
      }
    }
  }

  //Galaxy S9/S9+ 360x740 || iPhone 8, 7, 6S, 6 375x667
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 30px 10px;
    h1 {
      font-size: 30px;
      line-height: 40px;
      margin: 0px;
      &::first-letter {
        margin-left: 0px;
      }
    }
  }
  // 393x786 411x731 414x736
  @media screen and (min-width: 376px) and (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 30px 20px;
    h1 {
      font-size: 35px;
      line-height: 40px;
      margin: 0px;
      &::first-letter {
        margin-left: 0px;
      }
    }
  }
  //iPad 768x1024
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 95%;
    margin: 0px auto;
    margin-bottom: 20px;
    padding: 30px 20px;
    h1 {
      line-height: 50px;
      margin: 0px;
      &::first-letter {
        margin-left: 0px;
      }
    }
  }
  // Medium Screen 1024x800
  @media screen and (min-width: 769px) and (max-width: 1024px) {
  }
`;
