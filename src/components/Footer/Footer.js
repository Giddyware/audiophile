import styled from "styled-components/macro";
import Icon from "../Icon";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import VisuallHidden from "../VisuallyHidden";

const Footer = () => {
  return (
    <Container>
      <Logo />
      <FooterNav>
        <NavLink>Home</NavLink>
        <NavLink>HEADPHONES</NavLink>
        <NavLink>SPEAKERS</NavLink>
        <NavLink>EARPHONES</NavLink>
      </FooterNav>
      <About>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </About>
      <Copyright>Copyright 2021. All Rights Reserved</Copyright>
      <SocialNetwork>
        <div>
          <VisuallHidden>
            <span>facebook</span>
          </VisuallHidden>
          <Icon id="facebook" strokeWidth={3} color={"white"} size={24} />
        </div>
        <div>
          <VisuallHidden>
            <span>twitter</span>
          </VisuallHidden>
          <Icon id="twitter" strokeWidth={3} color={"white"} size={24} />
        </div>
        <div>
          <VisuallHidden>
            <span>intagram</span>
          </VisuallHidden>
          <Icon id="intagram" strokeWidth={3} color={"white"} size={24} />
        </div>
      </SocialNetwork>
    </Container>
  );
};
export default Footer;

const Container = styled(MaxWidthWrapper)`
  min-height: 650px;
  /* min-width: min(375px, 100%); */
  max-width: 375px;
  padding: 24px;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  background-color: var(--color-black);
  color: var(--color-white);

  &::before {
    content: "";
    width: 100px;
    height: 5px;
    background-color: var(--color-primary-dark);
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  gap: 16px;
`;

const NavLink = styled.a``;

const About = styled.div`
  text-align: center;
  font-size: ${15.5 / 16}rem;
  font-weight: var(--font-weight-medium);
  line-height: 25px;
`;

const Copyright = styled.div``;

const SocialNetwork = styled.div`
  display: flex;
  gap: 16px;
`;
