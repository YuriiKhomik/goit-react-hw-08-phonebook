import React from 'react';
import { StyledNavBar, StyledNavLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </StyledNavBar>
  );
};
