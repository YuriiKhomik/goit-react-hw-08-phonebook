import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavBar = styled.header`
  top: 0;
  left: 0;
  right: 0;
  position: sticky;
  z-index: 1100;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 64px;
  min-width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #f4f4f0;
  border-bottom: 2px solid #d9e6cc;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  margin-right: 10px;
  border: 1px solid #dbf5da;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    border: 1px solid red;
  }

  &.active {
    color: white;
    background-color: #f5743d;
  }
`;
