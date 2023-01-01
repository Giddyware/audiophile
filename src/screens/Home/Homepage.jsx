import styled from "styled-components/macro";
import Footer from "../../components/Footer/Footer";

import Header from "../../components/Header";
import Section from "../../components/Section";
import Spacer from "../../components/Spacer";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <>
      <Header />
      <Spacer size={96} />
      <Section />
      <Bodywrapper>
        <FirstBox>
          <Image src="../../assets/shared/mobile/image-zx9-speaker.jpg" />
          <Title>ZX9 SPEAKER</Title>
          <Description>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Description>
          <Button color="" size="">
            see product
          </Button>
        </FirstBox>

        <SecondBox>
          <Title>ZX7 SPEAKER</Title>
          <Button>see product</Button>
        </SecondBox>
      </Bodywrapper>

      <Footer />
    </>
  );
};

const Bodywrapper = styled.div`
  display: block;
  color: var(--color-white);
  /* margin: 0 auto; */
`;

const FirstBox = styled.div`
  min-height: 600px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  border-radius: 8px;
  padding: 24px;
  background-color: var(--color-primary-dark);
  margin: 24px;
  margin-top: 120px;

  button,
  h1,
  p {
    align-self: center;
  }
`;

const SecondBox = styled.div`
  display: flex;
  min-height: 320;
  background-color: var(--color-gray-500);
  margin: 24px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  text-align: justify;
  border-radius: 8px;
  padding: 100px 24px;
  color: black;

h1{
  width: fit-content;
}

  button {
    /* max-width: 160px; */
    background-color: var(--color-gray-500);
    color: var(--color-black);
    border: 1.8px solid var(--color-black);
  }

`;

const Image = styled.image`
  width: 100%;
`;

const Title = styled.h1`
  width: min-content;
  font-size: 2.25rem;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.3px;
`;

const Description = styled.p`
  font-size: 1.3rem;
  font-weight: var(--font-weight-medium);
  text-align: center;
  /* line-height: 2; */
`;

// const Button = styled.button`
//   color: white;
//   background-color: var(--color-black);
//   padding: 15px 30px;
//   text-transform: uppercase;
//   &:hover {
//     background-color: var(--color-primary-light);
//   }
// `;
export default Home;
