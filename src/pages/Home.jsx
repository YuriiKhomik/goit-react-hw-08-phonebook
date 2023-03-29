import { Box } from 'components/Box';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%"
    >
      {!isLoggedIn ? (
        <>
          <h1 style={styles.title}>welcome to the phonebook app</h1>
          <p>
            Please, <NavLink to="/login">log in</NavLink> or{' '}
            <NavLink to="/register">register</NavLink> to access your phonebook
            and stay connected
          </p>
        </>
      ) : (
        <>
          <h1 style={styles.title}>
            {user.name}, this is your personal phonebook
          </h1>
          <p>
            your contacts are located on{' '}
            <NavLink to="/contacts"> contacts page</NavLink>
          </p>
        </>
      )}
    </Box>
  );
}
