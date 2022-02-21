import { BackgroundWrapper } from '../styles/background.style';

const Background = ({ children }) => {
  return (
    <>
      <BackgroundWrapper>
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
