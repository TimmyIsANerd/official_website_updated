import React from 'react';
import { Column, Container, Typography } from '../GlobalStyle.style';
import {
  FeatureHeading,
  FeaturesWrapper,
  FeatureWrapper,
} from '../styles/Features.style';
import { FiExternalLink } from 'react-icons/fi';
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaMediumM,
} from 'react-icons/fa';
import NavAnchor from '../components/NavAnchor';

const Features = () => {
  return (
    <>
      <FeatureWrapper id="features" data-aos="fade-up" data-aos-duration="1500">
        <Container>
          {/* <Typography
            className="title"
            as="h2"
            fontSize="18px"
            fontWeight="600"
            lineHeight="150%"
            color="var(--text-bg)"
            margin="0 0 0 8px"
          >
            Features
          </Typography> */}
          <FeaturesWrapper>
            <Column flex="0.6">
              <FeatureHeading>
                <Typography
                  as="h4"
                  fontSize="50px"
                  heading
                  color="var(--primary-bg)"
                >
                  3Swap Ecosystem
                </Typography>
                <Typography
                  as="p"
                  fontSize="16px"
                  color="var(--text-bg-p)"
                  margin="0px !important"
                >
                  Cross-Chain Simplified.
                </Typography>
                <Typography as="p" fontSize="16px" color="var(--text-bg-p)">
                  Traders, liquidity providers, and developers interact with a
                  cross-chain financial marketplace that is accessible and
                  user-friendly. Non-fungible tokens become the new identity for
                  liquidity providers.
                </Typography>
                <div className="social__links">
                  <NavAnchor
                    url="https://twitter.com/3swapdex"
                    label=""
                    icon={<FaTwitter />}
                  />
                  <NavAnchor
                    url="https://facebook.com/3swapdex/"
                    label=""
                    icon={<FaFacebookF />}
                  />
                  {/* <NavAnchor url="/" label="" icon={<FaDiscord />} /> */}
                  <NavAnchor
                    url="https://t.me/dex_3SwapOfficial"
                    label=""
                    icon={<FaTelegramPlane />}
                  />
                  <NavAnchor
                    url="https://3swap.medium.com/"
                    label=""
                    icon={<FaMediumM />}
                  />
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
                    Read our whitepaper.
                  </Typography>
                  <NavAnchor
                    url="../docs/3swap-white-paper.pdf"
                    target="_blank"
                    icon={<FiExternalLink />}
                  />
                </span>

                <Typography
                  as="p"
                  fontSize="14px"
                  color="var(--text-bg-p)"
                  lineHeight="26px"
                >
                  Still don't get what we do? How do we do it? Read our
                  whitepaper to know more.{' '}
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
                    Protocol Governance.
                  </Typography>
                </span>

                <Typography
                  as="p"
                  fontSize="14px"
                  color="var(--text-bg-p)"
                  lineHeight="26px"
                >
                  3Swap Protocol is governed by a global community of SAP token
                  holders and delegates. We are Community-centric!.{' '}
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
                    Liquidity Sustenance.
                  </Typography>
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
