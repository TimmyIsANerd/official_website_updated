import styled from 'styled-components';
import { Typography } from '../GlobalStyle.style';
import Image from './Image';

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 32%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);

  margin: 5px;
  width: 100%;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex: 0 0 95%;
    margin: 10px;
    flex-direction: column;
  }
  @media screen and (min-width: 376px) and (max-width: 768px) {
    flex: 0 0 95%;
    margin: 10px;
    flex-direction: column;
  }
`;
const CardItem = styled.div`
  justify-content: space-between;
  flex: 0.7;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex: 1;
  }
  @media screen and (min-width: 376px) and (max-width: 768px) {
    flex: 1;
  }
`;
const CardHeading = styled.div``;
const CardDescription = styled.div``;
const CardImage = styled.div`
  cursor: pointer;
  flex: 0.3;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 320px) and (max-width: 375px) {
    display: none;
  }
  @media screen and (min-width: 376px) and (max-width: 768px) {
    display: none;
  }
`;

const Card = () => {
  return (
    <>
      <CardWrapper data-aos="fade-up">
        <CardItem data-aos="fade-right" data-aos-duration="1500">
          <CardHeading>
            <Typography as="h2">Stake</Typography>
          </CardHeading>
          <CardDescription>
            <Typography
              as="p"
              fontSize="0.78em"
              fontWeght="600"
              lineHeight="auto"
              color="#121E49"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis praesentium, voluptatum, non voluptas ut laboriosam,
            </Typography>
          </CardDescription>
        </CardItem>
        <CardImage>
          <Image
            img="https://images.unsplash.com/photo-1649472307900-3c668981df74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt="image"
          />
        </CardImage>
      </CardWrapper>
    </>
  );
};

export default Card;
