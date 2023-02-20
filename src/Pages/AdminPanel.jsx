import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import img from "../assets/logo.png";
import { Space, Table, Tag, Avatar } from "antd";
import axios from "axios";

const AdminPanel = () => {
  const [state, setState] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".admin .sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");

  const handleClick = () => {
    setState(!state);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Message",
      dataIndex: "msg",
      key: "msg",
    },
  ];

  const getData = async () => {
    try {
      const res = await axios.get("https://cruise-gg3e.onrender.com/user/get");
      setData(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const searched = (keyword) => (p) => p.name.toLowerCase().includes(keyword);
  return (
    <div className="admin">
      <div className={`sidebar ${state ? "close" : ""}`}>
        <div className="logo-details">
          <img
            src={img}
            alt="logo"
            style={{ width: "3rem", height: "3rem", objectFit: "cover" }}
          />
          <span className="logo_name">Cruise World</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/create">
              <i className="bx bx-repost"></i>
              <span className="link_name">Create Posts</span>
            </Link>
          </li>
          <li>
            <Link to="/Display">
              <i className="bx bxs-report"></i>
              <span className="link_name">Display Posts</span>
            </Link>
          </li>
          <li>
            <Link to="/create/review">
              <i className="bx bx-message-dots"></i>
              <span className="link_name">Create Review</span>
            </Link>
          </li>
          <li>
            <Link to="/display/review">
              <i className="bx bx-bar-chart-alt-2"></i>
              <span className="link_name">Display Reviews</span>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <i className="bx bx-log-in-circle"></i>
              <span className="link_name">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={handleClick}></i>
          <span className="text">Welcome To Cruise World</span>
        </div>
        <div className="topmenu">
          <div className="card1">
            <h4>Total Number of Users</h4>
            <p>{data.length}</p>
          </div>
        </div>
        <div className="table">
          <div className="search">
            {/* <input
              type="text"
              placeholder="Search Records"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            /> */}
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
