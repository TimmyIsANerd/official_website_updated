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
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.body};
}
h4,h3{
  color:${({ theme }) => theme.heading}
}
h1{
  color:${({ theme }) => theme.headingLight}
}
h2{
  color:${({ theme }) => theme.headingSmall}
}
p{
  color:${({ theme }) => theme.paragraph}
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
export const lightTheme = {
  body: '#fff',
  heading: '#4500A0',
  headingLight: '#fff',
  headingSmall: '#121E49',
  subheading: '#4500A0',
  paragraph: 'rgba(31, 31, 31, 0.7)',
  button: '#000000',
  toggleBtn: '#fff',
  toggleBtnColor: 'var(--primary-bg)',
  feature: {
    background:
      'linear-gradient(175.58deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.27) 99.87%);',
    border: '#000000',
  },
  footer: {
    color: 'rgba(18, 30, 73, 0.5) !important',
  },
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  toggleBorder: '#6B8096',
};

export const darkTheme = {
  body: '#0e0020',
  headingLight: '#F2F2F2',
  heading: 'rgba(255,255,255,0.9)',
  headingSmall: 'rgba(242, 242, 242, 0.9)',
  subheading: 'rgba(242, 242, 242, 0.9)',
  paragraph: 'rgba(255, 255, 255, 0.75)',
  button: '#4500A0',
  toggleBtn: 'var(--primary-bg)',
  toggleBtnColor: '#fff',
  feature: {
    background:
      'linear-gradient(175.58deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.2) 99.87%)',
    border: '#F2F2F2',
  },
  footer: {
    color: 'rgba(255, 255, 255, 0.8) !important',
  },
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  toggleBorder: '#6B8096',
};
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
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-family: ${(props) => (props.heading ? 'Kinn' : 'Poppins')}; ;
`;

export default GlobalStyle;
