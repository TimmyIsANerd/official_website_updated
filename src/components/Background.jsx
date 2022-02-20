import styled from 'styled-components';
const BackgroundWrapper = styled.div`
  width: 100%;
  position: relative;

  .bg {
    position: absolute;
    &:nth-child(1) {
        background: #BC29E0;
      /* background: linear-gradient(180deg, #4500a0 0%, #9e00ff 100%); */
      width: 600px;
      height: 90vh;
      left: 10px;
      filter: blur(100px);

      z-index: 200;
    }
    &:nth-child(2) {
      /* background: #bc29e0; */
      background: linear-gradient(180deg, #4500A0 0%, #9E00FF 100%);
       /*width: 300px;
      height: 300px;
      top: -30px; */
      height: 500px;
width: 600px;
left: 70px;
top: 0px;
border-radius: 0px;
z-index: 300;
filter: blur(90px);
transform: rotate(140.78deg);
    }
    &:nth-child(3) {
      background: #fce8a5;
      width: 700px;
      height: 300px;
      top: -30px;
      left: 500px;
      filter: blur(100px);

    }
    &:nth-child(4) {
      background: #ffd549;
      width: 200px;
      height: 300px;
      top: 200px;
      left: 650px;
      filter: blur(100px);

    }
    &:nth-child(5) {
      /* background: #4500a0; */
      background: linear-gradient(180deg, #4500A0 0%, #9E00FF 100%);
      width: 400px;
      height: 200px;
      top: 450px;
      left: 300px;
      filter: blur(90px);

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