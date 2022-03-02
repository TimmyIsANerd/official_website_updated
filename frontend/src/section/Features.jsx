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
      <FeatureWrapper id="features">
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
                  as="h4"
                  fontSize="50px"
                  lineHeight="120%"
                  heading
                  color="var(--primary-bg)"
                >
                  3Swap Ecosystem
                </Typography>
                <Typography
                  as="p"
                  fontSize="16px"
                  color="var(--text-bg-p)"
                  lineHeight="30px"
                >
                  Cross-Chain Simplified
                </Typography>
                <Typography
                  as="p"
                  fontSize="16px"
                  color="var(--text-bg-p)"
                  lineHeight="30px"
                >
                  Traders, liquidity providers, and developers interact with a
                  cross-chain financial marketplace that is accessible and
                  user-friendly. Non-fungible tokens become the new identity for
                  liquidity providers.
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
                    as="h3"
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
                  Still don't get what we do? How do we do it? Read our
                  whitepaper to know more{' '}
                </Typography>
              </div>
              <div className="feature">
                <span>
                  <Typography
                    as="h3"
                    fontSize="16px"
                    lineHeight="31px"
                    fontWeight="600"
                    color="var(--primary-bg)"
                  >
                    Protocol Governance
                  </Typography>
                  <FiExternalLink />
                </span>

                <Typography
                  as="p"
                  fontSize="14px"
                  color="var(--text-bg-p)"
                  lineHeight="26px"
                >
                  3Swap Protocol is governed by a global community of SAP token
                  holders and delegates. We are Community-centric!{' '}
                </Typography>
              </div>
              <div className="feature">
                <span>
                  <Typography
                    as="h3"
                    fontSize="16px"
                    lineHeight="31px"
                    fontWeight="600"
                    color="var(--primary-bg)"
                  >
                    Liquidity Sustenance
                  </Typography>
                  <FiExternalLink />
                </span>

                <Typography
                  as="p"
                  fontSize="14px"
                  color="var(--text-bg-p)"
                  lineHeight="26px"
                >
                  Providing liquidity just got cheaper, stylish, and less risky
                  (impermanent loss is mitigated).{' '}
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
