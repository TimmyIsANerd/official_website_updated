import React from 'react';
import Image from '../components/Image';
import Space from '../assets/space.svg';
import { Column, Typography } from '../GlobalStyle.style';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  GetCodeContainer,
  GetCodeForm,
  GetCodeWrapper,
} from '../styles/GetCode.style';
import { FaTimes } from 'react-icons/fa';

const GetCode = ({ setOpen, setComplete }) => {
  return (
    <>
      <GetCodeWrapper>
        <GetCodeContainer>
          <Column>
            <Typography
              as="h2"
              fontWeight="800"
              fontSize="24px"
              margin="10px 0 0 0"
            >
              Why we need your Email
            </Typography>
            <Typography
              as="p"
              fontSize="12px"
              margin="5px 0"
              lineHeight="26px"
              color="rgba(0,0,0,0.8)"
            >
              We need your Email to grant you FREE access to the MVP version of
              3swap,.
            </Typography>
            <Typography as="p" fontSize="12px" color="rgba(0,0,0,0.8)">
              We respect your privacy and promise not your mailbox with
              irrelevant messages, our team is working hard to finish the final
              product and we are happy you are part of us at this time.
            </Typography>
            <Image src={Space} alt="space" />
          </Column>
          <Column>
            <GetCodeForm>
              <div className="closeBtn">
                <FaTimes className="icon" onClick={() => setOpen(false)} />
              </div>
              <Typography as="h2">Get testing code</Typography>
              <Input
                type="text"
                placeholder="Enter Email Address"
                width="90%"
                bgColor="#fff"
              />
              <Button
                label="Get Test Code"
                bgColor="var(--primary-bg)"
                color="#fff"
                onClick={() => setComplete(false)}
              />
            </GetCodeForm>
          </Column>
        </GetCodeContainer>
      </GetCodeWrapper>
    </>
  );
};

export default GetCode;
