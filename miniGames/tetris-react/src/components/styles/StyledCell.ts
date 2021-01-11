import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  border-radius: 5px;
  background: ${(props) => props.color};
  border: ${(props) => (props.type === 0 ? "0px solid" : "2px solid")};
  border-bottom-color: #a0a4a7;
  border-right-color: #a0a4a7;
  border-top-color: #a0a4a7;
  border-left-color: #a0a4a7;
  box-shadow: ${(props) =>
    props.type === 0 ? "0px 0px 0px 0px #000" : "1px 1px 0px 1px #000"};
`;
