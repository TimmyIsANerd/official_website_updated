import styled from 'styled-components';
const AboutBgd = styled.div`
    
    .bg {
   position: absolute;
    
    &:nth-child(2) {
      background: #bc29e0;
      height: 570px;
width: 50px;
top: 1650px;
right: 20px;
border-radius: 0px;
z-index: 300;
filter: blur(70px);

    }
    &:nth-child(3) {
      background: #bc29e0;
      height: 500px;
width: 50px;
top: 1000px;
right: 300px;
border-radius: 0px;
z-index: 300;
filter: blur(90px);

    }
   
   
  }
`

const AboutBg = ({ children }) => {
    return (
      <>
        <AboutBgd>
          <div className="bg"></div>
          <div className="bg"></div>
          <div className="bg"></div>
          
          {children}
        </AboutBgd>
      </>
    );
  };
  
  export default AboutBg;