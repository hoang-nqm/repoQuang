import React from 'react';
import { Route, Routes } from 'react-router-dom';



import path from './constants/path';


import Dashboard from './pages/dashboard/dashboard.component';
import Blogs from './pages/blogs/blogs.component';
import PrivateRoute from './components/private-route/private-route.component';
import Login from './pages/login/login.component';
import Redirect from './components/redirect/redirect.component';


// import NotFound from './pages/notfound/notfound.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path['LOGIN_PAGE']} element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route
            path="/"
            element={<Redirect to={`${path['DASHBOARD_PAGE']}/${path['BLOG_PAGE']}`} />}
          ></Route>
          <Route path={path['DASHBOARD_PAGE']} element={<Dashboard />}>
            <Route path={path['BLOG_PAGE']} element={<Blogs />} />
            
       
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
