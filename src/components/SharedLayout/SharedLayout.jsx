import { SuspenseComponent } from 'components/Suspense';
import { NavBar } from 'components/NavBar';
import { Box } from 'components/Box';

export const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Box p="4">
        <SuspenseComponent />
      </Box>
    </>
  );
};
