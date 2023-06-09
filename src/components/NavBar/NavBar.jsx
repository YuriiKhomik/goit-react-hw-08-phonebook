import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation';
import { StyledNavBar } from './NavBar.styled';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledNavBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledNavBar>
  );
};
