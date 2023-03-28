import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Contacts from 'pages/Contacts';
// import Home from 'pages/Home';
// import Register from 'pages/Register';
// import Login from 'pages/Login';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
