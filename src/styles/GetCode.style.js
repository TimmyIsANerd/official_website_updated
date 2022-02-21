import styled from 'styled-components';
import Bg from '../assets/get_code_bg.svg';
import { Column } from '../GlobalStyle.style';

export const GetCodeWrapper = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding-bottom: 30px;
  }
`;
export const GetCodeContainer = styled.div`
  display: flex;
  align-items: center;

  ${Column} {
    &:first-child {
      background: url(${Bg}) no-repeat;
      background-position: left;
      background-size: cover;
      margin-right: 10px;
      padding: 20px 30px;
      position: relative;
      img {
        float: right;
        width: 150px;
        height: 200px;
        object-fit: contain;
        margin-right: -40px;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      @media screen and (max-width: 480px) {
      }
    }
    &:last-child {
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const GetCodeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  input {
    margin: 10px 0;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    input {
      text-align: center;
    }
  }
  button {
    margin-top: 10px;
  }
  .closeBtn {
    cursor: pointer;
    position: absolute;
    top: -120px;
    right: 30px;
    .icon {
      font-size: 30px;
      color: rgba(0, 0, 0, 0.3);
      transition: all 0.5s ease-in-out;
      &:hover {
        color: rgba(0, 0, 0, 0.9);
        transition: all 0.5s ease-in;
      }
    }
    @media screen and (max-width: 480px) {
      top: -260px;
      position: relative;
      right: -135px;

      .icon {
        font-size: 50px;
        background: rgba(82, 128, 255, 0.05);
        color: #fff;
        border-radius: 50%;
      }
    }
  }
`;
