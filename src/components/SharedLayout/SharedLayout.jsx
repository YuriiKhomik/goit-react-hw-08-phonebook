import { SuspenseComponent } from 'components/Suspense';
import { ToastContainer } from 'react-toastify';
import { NavBar } from 'components/NavBar';
import { Box } from 'components/Box';

export const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Box p="4">
        <SuspenseComponent />
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
