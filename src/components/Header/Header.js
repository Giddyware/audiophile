import styled from "styled-components/macro";
import Icon from "../Icon";

import Logo from "../Logo";

import { images } from "../../constants";
import Button from "../Button/Button";
import MaxWidthWrapper from "../MaxWidthWrapper";
// import HeadphoneImg from "./../../assets/home/mobile/image-header.jpg";

function Header() {
  return (
    <header>
      <MainHeader>
        <TopNav>
          <button>
            <Icon
              id="align-justify"
              strokeWidth={3}
              color={"white"}
              size={24}
            />
          </button>

          <Logo />

          <button>
            <Icon
              id="shopping-cart"
              strokeWidth={1}
              color={"white"}
              size={24}
            />
          </button>
        </TopNav>

        <MiddleNav>{/* <HorizontalRule /> */}</MiddleNav>

        <ButtomNav>
          <Title>New product</Title>
          <BoldTitle>XX99 Mark II HeadphoneS</BoldTitle>
          <Decs>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Decs>
          <Button>See product</Button>
        </ButtomNav>
      </MainHeader>
    </header>
  );
}

const MainHeader = styled.div`
  background: var(--color-black);
  color: white;
`;

const TopNav = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  /* align-items: baseline; */
  padding: 32px 24px;

  border-bottom: 1px solid var(--color-gray-700);
`;

const MiddleNav = styled.div``;

const ButtomNav = styled.div`
  padding: 110px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url({images.heroEarphoneDesktop});
  background-size: cover;
  background-repeat: no-repeat;
`;

// const Side = styled.div``;

// const Nav = styled.nav``;

// const HorizontalRule = styled.hr`
//   margin: auto 0;
//   height: 1px;
//   width: 100%;
//   background-color: red;
//   color: gray;
// `;

const Title = styled.p`
  font-weight: var(--font-weight-normal);
  color: var(--color-gray-700);
  font-size: 14px;
  letter-spacing: 10px;
  text-transform: uppercase;
  padding-bottom: 16px;
`;

const BoldTitle = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 1.29px;

  line-height: 1.29;
  padding-bottom: 24px;
`;

const Decs = styled.p`
  font-weight: var(--font-weight-medium);
  font-size: 15px;
  letter-spacing: 1.29px;
  line-height: 2;
  padding-bottom: 28px;
`;

export default Header;
