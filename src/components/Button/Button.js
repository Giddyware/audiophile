import styled from "styled-components/macro";

const Button = styled.button`
  /* padding: 8px 24px; */
  padding: 15px 30px;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-medium);
  font-family: var(--font-family-sans-serif);
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-black);
`;

export default Button;

// TODO   I want to build a reusable button

// const Button = ({children}) => {
//   return (
//     <button>{children}</button>
//   )
// }
// export default Button
