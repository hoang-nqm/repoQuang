import { List } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import paths from "../../constants/path";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ButtonItem from '../button-item/button-item.component';
import "./left-admin.style.scss";
function LeftAdmin({ isShow, showNav }) {
  return (
    <div className="">
      <div className={`dashboard__left ${isShow ? "active" : ""}`}>
        <div className="dashboard__left__logo">
          <Link to="/dashboard">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>

        <Link to="/dashboard/profile">
          <div className="dashboard__left__profile">
            <img src="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_default.jpg" alt="" />
            <h6>Minh Hoang</h6>
          </div>
        </Link>

        <div className="dashboard__left__listpage">
          <List>
            <h6 className="title">ADMIN</h6>
            <ButtonItem
                to={paths['DASHBOARD_PAGE'] + '/' + paths['BLOG_PAGE']}
                title="Blogs"
                showNav={showNav}
              >
                <DashboardIcon className="icon" />
              </ButtonItem>
            <h6 className="title">SEMESTER</h6>
          </List>
        </div>
      </div>
      <div
        className={`overlay ${isShow ? "active" : ""}`}
        onClick={() => {
          showNav(false);
        }}
      ></div>
    </div>
  );
}

export default LeftAdmin;
