import styled from "styled-components/macro";

// import Headphone from "./../../assets/cart/home/mobile/image-header.jpg";

const Section = () => {
  return (
    <section>
      {/* Card 1 */}
      <Wrapper>
        <Card>
          <Image src="/assets/home/mobile/image-header.jpg" alt="Header" />
          <Title>HeadPhones</Title>
          <CallToAction>Shop</CallToAction>
        </Card>
        <Card>
          <Image src="/assets/home/mobile/image-header.jpg" alt="Header" />
          <Title>Speakers</Title>
          <CallToAction>Shop</CallToAction>
        </Card>
        <Card>
          <Image src="/assets/home/mobile/image-header.jpg" alt="Header" />
          <Title>Earphones</Title>
          <CallToAction>Shop</CallToAction>
        </Card>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 217px;
  background-color: hsl(0, 0, 94%);
  padding: 32px 24px;
`;

const Card = styled.div`
  /* position: relative; */
  /* top: 52px; */
  background-color: red;
  width: 100%;
  height: 100%;
  max-height: 166px;
  background-color: #f1f1f1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

const Image = styled.image`
  width: 200px;
  height: 200px;
  object-fit: cover;
  /* background: url("/assets/home/mobile/image-header.jpg");
  background-size: cover;
  background-repeat: no-repeat; */
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`;
const CallToAction = styled.h1`
  color: gray;

  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
`;
export default Section;
