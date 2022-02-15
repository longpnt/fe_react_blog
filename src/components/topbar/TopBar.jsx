import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  Input, Col,
  Row,
} from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import { Context } from "../../context/Context";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const { REACT_APP_API_URL } = process.env

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = `${REACT_APP_API_URL}/images`;

  const onSearch = value => console.log(value);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>{" "}
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profile} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
          <Input.Group compact>
            <Input.Search allowClear style={{ width: '40%' }} defaultValue="0571" />
            <Input.Search allowClear style={{ width: '40%' }} defaultValue="26888888" />
          </Input.Group>
      </div>
    </div>
  );
}
