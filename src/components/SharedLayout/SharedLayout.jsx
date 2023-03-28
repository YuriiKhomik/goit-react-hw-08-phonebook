import { SuspenseComponent } from 'components/Suspense';
import { NavBar } from 'components/NavBar';

export const SharedLayout = () => {
  return (
    <div>
      <NavBar />
      <SuspenseComponent />
    </div>
  );
};
