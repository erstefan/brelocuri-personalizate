import styled from "styled-components";

const Picker = styled.div`
  padding: 10px;
  background: #eee;
`;
export default Picker

const Colour = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: inline-block;
  background-color: ${props => props.colour}
`;

export default Colour;