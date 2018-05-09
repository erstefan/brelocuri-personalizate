import styled from "styled-components";

const Message = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background .35s ease-in-out;
  
  &:hover {
    background: #aaa;
  }
`;

export default Message;

