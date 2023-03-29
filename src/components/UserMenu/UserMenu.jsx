import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { StyledButton } from 'components/Button';
import { Box } from 'components/Box';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box display="flex" alignItems="center">
      <p>Welcome, {user.name}</p>
      <Box ml="12px">
        <StyledButton type="button" onClick={handleLogOut}>
          Logout
        </StyledButton>
      </Box>
    </Box>
  );
};
