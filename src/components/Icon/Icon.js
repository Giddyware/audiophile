import styled from "styled-components/macro";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";

const icons = {
  "shopping-cart": AiOutlineShoppingCart,
  "align-justify": IoMenu,
  "arrow-button": HiOutlineChevronRight,
  facebook: AiFillFacebook,
  twitter: IoLogoTwitter,
  intagram: AiOutlineInstagram,
};
const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) => p.strokeWidth}px;
  }
`;

export default Icon;
