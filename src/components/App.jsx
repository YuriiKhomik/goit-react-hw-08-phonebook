import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Contacts from 'pages/Contacts';
import { useDispatch } from 'react-redux';
import { SharedLayout } from './SharedLayout';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data'
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
