import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
const SharedLayout = () => {
  return (
      <>
      <Header />
      <ToastContainer />
      <Suspense Suspense fallback={<p>Loading...</p>}>
        <Outlet /> 
      </Suspense>
    </>
  );
};

export default SharedLayout;
