import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header'
const SharedLayout = () => {
  return (
      <>
      <Header/>
      <Suspense Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
