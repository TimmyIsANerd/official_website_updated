import styled from 'styled-components';
const BackgroundWrapper = styled.div`
  position: relative;
  z-index: 200;
 

  .bg {
    position: absolute;
    &:nth-child(1) {
        background: #BC29E0;
      width: 600px;
      height: 90vh;
      left: 10px;
      filter: blur(100px);
      z-index: 200;

      @media screen and (max-width: 900px){
       width: 150px;
       height: 70vh;
      }
    }
    &:nth-child(2) {
      background: #bc29e0;
      height: 500px;
  width: 600px;
  left: 70px;
  top: 0px;
border-radius: 0px;
z-index: 300;
filter: blur(90px);
transform: rotate(140.78deg);

@media screen and (max-width: 900px){
  /* display:none; */
       height: 200px;
       width: 70px;
      }
    }
    &:nth-child(3) {
      background: #fce8a5;
      width: 700px;
      height: 300px;
      top: -30px;
      left: 500px;
      filter: blur(60px);


      @media screen and (max-width: 1200px){
     display: none;
      }
      @media screen and (max-width: 900px){
       height: 200px;
       width: 150px;
       left: 150px;
  top: 0px;
      }

    }
    &:nth-child(4) {
      background: #ffd549;
      width: 200px;
      height: 300px;
      top: 200px;
      left: 650px;
      filter: blur(100px);

      @media screen and (max-width: 1200px){
       display: none;
      }
      @media screen and (max-width: 900px){
        display: block;
        height: 200px;
       width: 150px;
       left: 150px;
  top: 0px;
      }

    }
    &:nth-child(5) {
      /* background: #4500a0; */
      background: linear-gradient(180deg, #4500A0 0%, #9E00FF 100%);
      width: 400px;
      height: 200px;
      top: 450px;
      left: 300px;
      filter: blur(90px);

      @media screen and (max-width: 900px){
        top:0;
       height: 0px;
       width: 0px;
       left: 0px;
      }

    }
  }


`;
const Background = ({ children }) => {
  return (
    <>
      <BackgroundWrapper>
        <div className="bg"></div>
        <div className="bg"></div>
        <div className="bg"></div>
        <div className="bg"></div>
        <div className="bg"></div>
        {children}
      </BackgroundWrapper>
    </>
  );
};

export default Background;