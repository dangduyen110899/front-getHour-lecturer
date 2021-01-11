import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import * as auth from '../../utils/auth.service';
import Cookies from "js-cookie";

const Header = () => {
  const role = Cookies.get("user") ? JSON.parse(Cookies.get("user")).roles[0] : null
  const history = useHistory()
  const handleLogout = () => {
    auth.logout();
    history.push('/login')
  };

  return (
    <header className="admin-header">
      <h1 className="admin-header__logo">Greek</h1>
      <ul className="admin-header__link">
        {
          role==="ROLE_ADMIN" && <>
            <li className="ml-5 admin-header__item">
              <Link to="/tablecompany" className="admin-header__name">
                List Company
              </Link>
            </li>
            <li className="ml-5 admin-header__item">
              <Link to="/listcategory" className="admin-header__name">
                List Categories
              </Link>
            </li>
            <li className="ml-5 admin-header__item">
          <Link to="/tableworker" className="admin-header__name">
            List Worker
          </Link>
        </li>
          </>
        }
        {
          role==="ROLE_COMPANY" && <>
        <li className="ml-5 admin-header__item">
          <Link to="/tablestore" className="admin-header__name">
            List Store
          </Link>
        </li>
        </>
        }
        {
          role==="ROLE_STORE" && <>
        <li className="ml-5 admin-header__item">
          <Link to="/listoccupation/page=1" className="admin-header__name">
            List Occuption
          </Link>
        </li>
        <li className="ml-5 admin-header__item">
          <Link to="/tablejob" className="admin-header__name">
            List Job
          </Link>
        </li>
        </>
        }
      </ul>
      <button className="admin-header__btn-logout" onClick={handleLogout}>
        Log out
      </button>
    </header>
  );
};

export default Header;
