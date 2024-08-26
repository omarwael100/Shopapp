import React from 'react';
import  Button  from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setisLoggedin }) => {
  const [cookies, , removeCookie] = useCookies(['Cookieee']);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('Cookieee', { path: '/' });
    setisLoggedin(false);
    navigate('/');
  };

  return (
    <Button variant="dark" onClick={handleLogout} className="w-100">
      Logout
    </Button>
  );
};

export default Logout;
