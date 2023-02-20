import React, { useEffect, useState } from "react";
import v2 from "../assets/two.mp4";
import logo from "../assets/logo.png";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import Contact2 from "../Components/Contact2";
const Home = () => {
  const [state, setState] = useState(false);

  const handlenav = () => {
    setState(!state);
    console.log(state);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      showModal();
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <section className="home">
        <div className="bannerVideo">
          <video src={v2} autoPlay className="active" muted loop></video>
        </div>
        <Modal
          title="Welcome To Cruise World"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{
            background: "rgba(255,255,255,0.5) !important",
          }}
        >
          <Contact2 />
        </Modal>
        <div className="container">
          <header id="navbar">
            <img src={logo} alt="logo" className="logo" />

            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
            <div className={` ${state ? "none" : "sidenav"}`}>
              <div className="top">
                <p>Cruise world</p>
                {/* <i class="bx bx-menu-alt-right" onClick={handlenav}></i> */}
              </div>
              <div className="links">
                <Link className="link" to="/">
                  Home
                </Link>
                <Link className="link" to="/">
                  About
                </Link>
                <Link className="link" to="/">
                  Contact Us
                </Link>
                <Link className="link" to="/">
                  Youtube
                </Link>
              </div>
            </div>
            <i
              class="bx bx-menu-alt-right"
              className="show"
              onClick={handlenav}
            >
              <i class="bx bx-menu-alt-right"></i>
            </i>
          </header>
          <div className="content">
            <div className="bannerText">
              <div className="active">
                <h2>
                  {" "}
                  Cruise <span>Worldz</span>
                </h2>
                <h4>
                  {" "}
                  <ReactTypingEffect
                    text={[
                      "Welcome to the Cruise Worldz",
                      " Travel content strives to produce consistent communication materials",
                    ]}
                  />
                </h4>
                <p>
                  Travel content strives to produce consistent communication
                  materials (blog posts, images, videos, etc ) that customers
                  will find helpful while crawling through the web. Travel
                  content does not promote a brand like traditional advertising
                </p>
                <button>
                  Visit <i class="bx bx-right-arrow-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
