import React from 'react';
import { Typography } from '../GlobalStyle.style';
import styled from 'styled-components';
import Button from '../components/Button';

const ConfirmationWrapper = styled.div`
  padding: 50px;
  justify-content: center;
  text-align: center;
  align-items: center;

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
      <ConfirmationWrapper>
        <Typography as="h1" color="#000" textAlign="center">
          Welcome to the Family
        </Typography>
        <Typography
          as="p"
          color="color: rgba(0, 0, 0, 0.65)"
          lineHeight="24px"
        />
        <Typography as="p" color="rgba(0,0,0,0.65)" lineHeight="24px">
          Check you email for the testing code
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
