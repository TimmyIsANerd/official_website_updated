import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';
import Button from '../components/Button';
import { NavLogo } from '../components/Header';
import Image from '../components/Image';
import Input from '../components/Input';
import Modal from '../components/Modal';
import { Container, Typography } from '../GlobalStyle.style';
import Confirmation from '../screens/Confirmation';
import GetCode from '../screens/GetCode';
import Logo from '../assets/logo_1.png';
import Swal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
import { DemoAppContainer } from '../styles/App.style';
const MySwal = withReactContent(Swal);

const Demo = () => {
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [testCode, setTestCode] = useState('');

  let response;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      !testCode &&
        MySwal.fire('Empty Field!!!', 'Please enter your test code', 'error');
      setLoading(true);
      const { data } = await axios.post('/auth/verify', {
        test_code: testCode,
      });
      response = data;
      // add token to tocal storage
      localStorage.setItem('token', JSON.stringify(response.data.token));
      if (response.errors.length > 0) {
        MySwal.fire('Error Occured.', `${response.errors[0].msg}`, 'error');
        setLoading(false);
      } else {
        window.location = 'http://35.192.105.226:22000/swap';
        setComplete(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      window.location = 'http://35.192.105.226:22000/swap';
    }
  }, []);
  return (
    <>
      {/* Get Test Code Modal */}
      <Modal open={open} width="800px" height="auto" bg="rgba(255,255,255,0.9)">
        <GetCode setOpen={setOpen} setComplete={setComplete} />
      </Modal>
      {/* Confirmation Modal */}
      <Modal open={complete} height="auto" bg="rgba(255,255,255,0.3)">
        <Confirmation setComplete={setComplete} />
      </Modal>

      <Background>
        <Container style={{ background: '' }}>
          {' '}
          <NavLogo>
            <Link to="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </NavLogo>
        </Container>
        <Container>
          <DemoAppContainer>
            <Typography textAlign="center">Continue to App</Typography>
            <div className="form">
              {/* <Input
                type="text"
                placeholder="Enter email"
                bgColor="rgba(255,255,255,0.9)"
                textAlign="center"
              /> */}
              <Input
                type="text"
                placeholder="Enter test code"
                bgColor="rgba(255,255,255,0.9)"
                textAlign="center"
                value={testCode}
                onChange={(e) => setTestCode(e.target.value)}
              />
            </div>
            <div className="button">
              <Button
                label="Continue"
                bgColor="var(--primary-bg)"
                color="#fff"
                width="50%"
                disabled={testCode.length < 1 || loading}
                onClick={handleSubmit}
              />
            </div>
            <Typography
              as="p"
              textAlign="center"
              fontSize="14px"
              color="var(--primary-bg)"
              onClick={() => setOpen(!open)}
            >
              Don't have a test code? <u>click here.</u>
            </Typography>
          </DemoAppContainer>
        </Container>
      </Background>
    </>
  );
};

export default Demo;
