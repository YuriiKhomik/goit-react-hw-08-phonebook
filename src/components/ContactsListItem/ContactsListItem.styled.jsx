import styled from '@emotion/styled';

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 600px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  padding: 16px;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
