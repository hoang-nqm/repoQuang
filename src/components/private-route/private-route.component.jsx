import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../loading/loading.component';
import { useNavigate } from 'react-router-dom';
import PATH from '../../constants/path';
import "./private-route.style.scss";

const PrivateRoute = (props) =>  {
  // check token in here -> check authen
  const isAuthen = true;
  let [isLoad, setIsLoad] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const account = localStorage.getItem('account');
    if (account) {
      setIsLoad(false);
    } else {
      navigate(PATH['LOGIN_PAGE']);
    }
  });

  if (isLoad) return <Loading />;

  if (isAuthen) {
    return <Outlet />;
  }

  return <div>PrivateRoute</div>;
}


export default PrivateRoute;
