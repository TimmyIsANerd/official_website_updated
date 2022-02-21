import styled from 'styled-components';

export const DemoAppContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 50px;
  backdrop-filter: blur(5px);

  .form {
    margin: 30px 0;

    input {
      margin-bottom: 15px;
    }
  }

  .button {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }
  p {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
