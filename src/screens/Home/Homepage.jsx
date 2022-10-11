import styled from "styled-components/macro";

import Header from "../../components/Header";
import Section from "../../components/Section";

const Home = () => {
  return (
    <>
      <Header />
      <Section />
      <Bodywrapper>
        <FirstBox>
          <Image src="/assets/shared/mobile/image-zx9-speaker.jpg" />
          <Title>
            ZX9 <br /> SPEAKER
          </Title>
          <Description>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Description>
          <Button>see product</Button>
        </FirstBox>
        <SecondBox>
          <Image src="/assets/shared/mobile/image-zx9-speaker.jpg" />
          <Title>
            ZX9 <br /> SPEAKER
          </Title>
          <Description>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Description>
          <Button>see product</Button>
        </SecondBox>
      </Bodywrapper>
    </>
  );
};

const Bodywrapper = styled.div`
  display: block;
  color: white;
`;

const FirstBox = styled.div`
  height: 600px;
  /* width: 100%; */

  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  border-radius: 8px;
  padding: 24px;
  background-color: #d87d4a;
  margin: 24px;
  margin-top: 120px;

  button,
  h1,
  p {
    align-self: center;
  }
  @media (min-width: 600px) {
    margin: 168px 30px 30px 30px;
  }
`;

const SecondBox = styled.div`
  display: flex;
  height: 600px;
  background-color: #f1f1f1;
  margin: 24px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  text-align: justify;
  border-radius: 8px;
  padding: 24px;
  color: black;

  button,
  h1,
  p {
    align-self: center;
  }
`;

const Image = styled.image`
  height: fit-content;
  width: fit-content;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: justify;
`;

const Description = styled.p`
  height: auto;
  font-size: 15px;
  font-weight: 300;
  text-align: justify;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  padding: 15px 30px;
  text-transform: uppercase;
  &:hover {
    background-color: aliceblue;
  }
`;
export default Home;
