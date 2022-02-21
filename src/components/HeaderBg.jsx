import styled from 'styled-components';
import { Bg_desktop } from '../assets';
const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  position: relative;
  background: url(${Bg_desktop}) no-repeat;
  background-size: contain;
  filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.5));

  //Galaxy S9/S9+ 360x740 || iPhone 8, 7, 6S, 6 375x667
  @media screen and (min-width: 320px) and (max-width: 375px) {
    filter: unset;
    background-size: cover;
    background-position: 40% 100%;
  }
  // 393x786 411x731 414x736
  @media screen and (min-width: 376px) and (max-width: 480px) {
    background-size: cover;
    background-position: 40% 100%;
    filter: unset;
  }
  //iPad 768x1024
  @media screen and (min-width: 481px) and (max-width: 768px) {
    background-size: cover;
    background-position: 40% 100%;
    filter: unset;
  }
  // Medium Screen 1024x800
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background-size: cover;
    filter: unset;
  }
`;
const Background = ({ children }) => {
  return (
    <>
      <BackgroundWrapper>{children}</BackgroundWrapper>
    </>
  );
};

export default Background;
