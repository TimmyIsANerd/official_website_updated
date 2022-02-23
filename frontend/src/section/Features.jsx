import React from 'react';
import { Column, Container, Typography } from '../GlobalStyle.style';
import {
  FeatureHeading,
  FeaturesWrapper,
  FeatureWrapper,
} from '../styles/Features.style';
import { FiExternalLink } from 'react-icons/fi';
import {
  FaDiscord,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
} from 'react-icons/fa';
import NavLink from '../components/NavLink';

const Features = () => {
  return (
    <>
      <FeatureWrapper>
        <Container>
          <Typography
            className="title"
            as="h2"
            fontSize="18px"
            fontWeight="600"
            lineHeight="150%"
            color="var(--text-bg)"
            margin="0 0 0 8px"
          >
            Features
          </Typography>
          <FeaturesWrapper>
            <Column flex="0.6">
              <FeatureHeading>
                <Typography
                  as="h1"
                  fontSize="50px"
                  lineHeight="120%"
                  heading
                  color="var(--primary-bg)"
                >
                  We are a community based project.
                </Typography>
                <Typography
                  as="p"
                  fontSize="16px"
                  color="var(--text-bg-p)"
                  lineHeight="30px"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </Typography>
                <div className="social__links">
                  <NavLink url="/" label="" icon={<FaTwitter />} />
                  <NavLink url="/" label="" icon={<FaFacebookF />} />
                  <NavLink url="/" label="" icon={<FaDiscord />} />
                  <NavLink url="/" label="" icon={<FaTelegramPlane />} />
                </div>
              </FeatureHeading>
            </Column>
            <Column flex="0.4">
              <div className="feature">
                <span>
                  <Typography
                    as="h2"
                    fontSize="16px"
                    lineHeight="31px"
                    fontWeight="600"
                    color="var(--primary-bg)"
                  >
                    Read our whitepaper
                  </Typography>
                  <FiExternalLink />
                </span>

                <Typography
                  as="p"
                  fontSize="14px"
                  color="var(--text-bg-p)"
                  lineHeight="26px"
                >
                  lorem Ipsum is simply dummy text of the printing dummy text
                  of.{' '}
                </Typography>
              </div>
              <div className="feature">
                <span>
                  <Typography
                    as="h2"
                    fontSize="16px"
                    lineHeight="31px"
                    fontWeight="600"
                    color="var(--primary-bg)"
                  >
                    Investors note
                  </Typography>
                  <FiExternalLink />
                </span>

                <Typography
                  as="p"
                  fontSize="14px"
                  color="var(--text-bg-p)"
                  lineHeight="26px"
                >
                  lorem Ipsum is simply dummy text of the printing dummy text
                  of.{' '}
                </Typography>
              </div>
              <div className="feature">
                <span>
                  <Typography
                    as="h2"
                    fontSize="16px"
                    lineHeight="31px"
                    fontWeight="600"
                    color="var(--primary-bg)"
                  >
                    Events
                  </Typography>
                  <FiExternalLink />
                </span>

                <Typography
                  as="p"
                  fontSize="14px"
                  color="var(--text-bg-p)"
                  lineHeight="26px"
                >
                  lorem Ipsum is simply dummy text of the printing dummy text
                  of.{' '}
                </Typography>
              </div>
            </Column>
          </FeaturesWrapper>
        </Container>
      </FeatureWrapper>
    </>
  );
};

export default Features;
