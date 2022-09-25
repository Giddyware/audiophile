import styled from "styled-components/macro";

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>audiophile</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  /* color: inherit; */
  color: white;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default Logo;