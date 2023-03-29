import { useAuth } from 'hooks';
import { StyledNavLink } from 'components/NavBar';
import { Box } from 'components/Box';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex" justifyContent="space-between">
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Box>
  );
};
