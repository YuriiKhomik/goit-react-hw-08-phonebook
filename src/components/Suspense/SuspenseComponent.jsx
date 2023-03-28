import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SuspenseComponent = () => {
  return (
    <Suspense fallback={<div>Loading information...</div>}>
      <Outlet />
    </Suspense>
  );
};
