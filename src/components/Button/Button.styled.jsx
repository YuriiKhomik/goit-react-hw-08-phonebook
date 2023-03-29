import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 2px 16px;
  height: 38px;
  min-width: 96px;
  min-height: 38px;
  border: none;
  color: #fff;
  background-color: #5865f2;
  transition: background-color 0.17s ease, color 0.17s ease;
  &:hover {
    background-color: #4752c4;
  }
`;
