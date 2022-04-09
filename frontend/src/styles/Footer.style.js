import { Link } from 'react-scroll';
import styled from 'styled-components';
import { Column } from '../GlobalStyle.style';

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 30px;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${Column} {
    display: flex;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: rgba(18, 30, 73, 0.3);
    transition: all 0.5s ease-in-out;

    &:hover {
      color: rgba(18, 30, 73, 1);
      transition: all 0.5s ease-in-out;
    }
    &::after {
      content: '';
      border-right: 1px solid #eee;
      padding-left: 3px;
    }

    &:last-child {
      &::after {
        content: '';
        border-right: none;
      }
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-left: 10px;
    ${Column} {
      flex-direction: column;
    }
    a {
      font-size: 16px;
      font-weight: 800;
      color: ${({ theme }) => theme.footer.color};
      margin: 10px 0;
      &:hover {
        color: rgba(0, 0, 0, 0.8);
      }
      &::after {
        display: none;
      }

      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    ${Column} {
      margin-left: 25px;
    }
    a {
      font-size: 18px;
      color: #000;
    }
  }
`;

export const FooterScroll = styled(Link)`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 50px;
  margin-bottom: 30px;

  button {
    color: #fff !important;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-radius: 50%;
  }
`;
