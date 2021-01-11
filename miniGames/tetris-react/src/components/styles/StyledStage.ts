import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  background-color: rgba(115, 116, 116, 0.645);
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
`;
