import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-tap-highlight-color:rgba(0,0,0,0) !important;
  }

  :root{
    --primary-bg:#4500A0;
    --text-bg:#121E49;
    --text-bg-p:#1F1F1F
  }
  body {
  margin: 0;
  font-family: 'Poppins','Kinn' sans-serif;
  background: whitesmoke;
}
a{
  text-decoration: none;
  font-family: 'Poppins',sans-serif;
}
button:disabled,
  button[disabled] {
    background-color: #000;
    cursor: not-allowed;
  }
  button:active{
    background-color:#ccc
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  //Galaxy S9/S9+ 360x740 || iPhone 8, 7, 6S, 6 375x667
  @media screen and (min-width: 320px) and (max-width: 375px) {
    padding: 0px 20px;
  }
  // 393x786 411x731 414x736
  @media screen and (min-width: 376px) and (max-width: 480px) {
    padding: 0px 20px;
  }
  //iPad 768x1024
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0px 0px;
  }
  // Medium Screen 1024x800
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0px 20px;
  }
`;
export const Column = styled.div`
  flex: ${(props) => (props.flex ? props.flex : '0.5')};
`;

export const Typography = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  color: ${(props) => (props.color ? props.color : '#121212')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-family: ${(props) => (props.heading ? 'Kinn' : 'Poppins')}; ;
`;

export default GlobalStyle;
