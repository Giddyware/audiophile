import styled from "styled-components/macro";
import { QUERIES } from "../../styles";
import Icon from "../Icon";
import MaxWidthWrapper from "../MaxWidthWrapper";

// import Headphone from "./../../assets/cart/home/mobile/image-header.jpg";

const Section = () => {
  return (
    <section>
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
            src="../../assets/shared/mobile/image-zx7-speaker.jpg"
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

const Wrapper = styled(MaxWidthWrapper)`
  /* width: 100%; */
  background-color: var(--color-gray-100);
  padding: 32px 24px;
  /* display: block; */
  /* height: fit-content; */
  @media screen and ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 10px;
  }
`;

const Card = styled.div`
  /* max-width: 360px; */

  width: 100%;
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: var(--color-gray-300);

  @media screen and ${QUERIES.tabletAndUp} {
    flex: 1;
    margin-bottom: revert;
  }
`;

const Image = styled.image`
  position: relative;
  top: -52px;
  height: 104px;
  width: 80px;
`;
const Title = styled.h1`
  font-weight: var(--font-weight-bold);
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
