import React from 'react';
import { Typography } from '../GlobalStyle.style';
import styled from 'styled-components';
import Button from '../components/Button';
import { Bg_form } from '../assets';
const ConfirmationWrapper = styled.div`
  padding: 50px;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: url(${Bg_form}) no-repeat;
  background-size: contain;
  background-position: bottom;

  ${Typography} {
    &:nth-child(1) {
      margin-bottom: 8px;
    }
    &:nth-child(3) {
      margin: 8px 0;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Confirmation = ({ setComplete }) => {
  return (
    <>
      <ConfirmationWrapper onClick={() => setComplete(false)}>
        {/* <Typography
          as="h1"
          color="#000"
          textAlign="center"
          fontSize="21px"
          lineHeight="24px"
        >
          Welcome to the Family
        </Typography> */}
        <Typography
          as="p"
          color="color: rgba(0, 0, 0, 0.65)"
          lineHeight="24px"
        />
        <Typography
          as="p"
          color="#fff"
          lineHeight="24px"
          fontSize="16px"
          textAlign="center"
          margin="20px 0 !important"
        >
          Thank you for showing interest in testing our DEX. A test code has
          been sent to the email address you provided.
        </Typography>
        <ButtonWrapper>
          <Button
            label="OK"
            bgColor="var(--primary-bg)"
            color="#eee"
            padding="12px 25px"
            onClick={() => setComplete(false)}
          />
        </ButtonWrapper>
      </ConfirmationWrapper>
    </>
  );
};

export default Confirmation;
