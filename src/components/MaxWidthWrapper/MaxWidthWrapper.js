import styled from "styled-components/macro";
import { QUERIES } from "../../styles";

// import { QUERIES } from '../../styles/media-queries';

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, calc(1200px + 32px * 2));
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${QUERIES.laptopAndUp} {
    padding-left: 165px;
    padding-right: 165px;
  }
`;

export default MaxWidthWrapper;
