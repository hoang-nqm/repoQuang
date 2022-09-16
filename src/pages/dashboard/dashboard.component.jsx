
import "./dashboard.style.scss";

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftAdmin from '../../components/left-admin/left-admin.component';

import Header from '../../components/header/header.component';

function Dashboard() {
  let [isDark, setIsDark] = useState(true);
  let [isShow, setIsShow] = useState(false);

  return (
    <div className="dashboard" data-theme={isDark ? 'dark' : 'light'}>
      <LeftAdmin isShow={isShow} showNav={setIsShow} />
      <div className="dashboard__right">
        <Header setDark={setIsDark} showNav={setIsShow} />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
