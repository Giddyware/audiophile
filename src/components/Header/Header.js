import styled from "styled-components/macro";
import Icon from "../Icon";

import Logo from "../Logo";
// import HeadphoneImg from './../../assets/home/mobile/image-header.jpg'

function Header() {
  return (
    <header>
      <MainHeader>
        <Top>
          <Icon id="align-justify" strokeWidth={3} color={"white"} />
          <Logo />
          <Icon id="shopping-cart" strokeWidth={1} color={"white"} />
        </Top>

        <Middle>
          <HorizontalRule />
        </Middle>

        <Buttom>
          <Title>New product</Title>
          <BoldTitle>XX99 Mark II HeadphoneS</BoldTitle>
          <Decs>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Decs>
        </Buttom>
      </MainHeader>
    </header>
  );
}

const MainHeader = styled.div`
  background-color: black;
  min-height: 600px;
  color: white;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 35px 25px;
`;

const Middle = styled.div``;
const Buttom = styled.div`
  padding: 110px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url("/assets/home/mobile/image-header.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Side = styled.div``;

const Nav = styled.nav``;

const HorizontalRule = styled.hr`
  margin: auto 0;
  height: 1px;
  width: 100%;
  background-color: red;
  color: gray;
`;

const Title = styled.p`
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 10px;
  text-transform: uppercase;
  padding-bottom: 15px;
`;

const BoldTitle = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1.29px;
  line-height: 1.29;
  padding-bottom: 20px;
`;

const Decs = styled.p`
  line-height: 1.8;
`;

export default Header;
