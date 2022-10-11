import styled from "styled-components/macro";
import Icon from "../Icon";

// import Headphone from "./../../assets/cart/home/mobile/image-header.jpg";

const Section = () => {
  return (
    <section>
      {/* Card 1 */}
      <Wrapper>
        <Card>
          <Image
            src="../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
            alt="Headphones_image"
          />
          <Title>HeadPhones</Title>
          <CallToAction>
            <span>Shop</span>
            <Icon id="arrow-button" strokeWidth={1} color={"black"} size={20} />
          </CallToAction>
        </Card>
        <Card>
          <Image
            src="assets/shared/mobile/image-zx7-speaker.jpg"
            alt="Speakers_image"
          />
          <Title>Speakers</Title>
          <CallToAction>Shop</CallToAction>
        </Card>
        <Card>
          <Image
            src="assets/shared/mobile/image-zx9-speaker.jpg"
            alt="Earphones_image"
          />
          <Title>Earphones</Title>
          <CallToAction>Shop</CallToAction>
        </Card>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: hsl(0, 0, 94%);
  padding: 32px 24px;
  display: block;
  height: fit-content;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #f1f1f1;

  @media (min-width: 600px) {
    max-width: 360px;
    margin-right: 30px;
  }
`;

const Image = styled.image`
  position: relative;
  top: -52px;
  height: 104px;
  width: 80px;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`;
const CallToAction = styled.button`
  display: flex;
  color: var(--color-gray-700);

  font-weight: var(--font-weight-bold);
  font-size: 13px;
  text-transform: uppercase;
`;
export default Section;
