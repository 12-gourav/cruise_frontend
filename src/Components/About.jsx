import React, { useState } from "react";
import img1 from "../assets/a111.jpg";
import img2 from "../assets/a12.jpg";
import img3 from "../assets/a13.jpg";
const About = () => {
  const [state, setState] = useState([0]);

  const data = [
    {
      id: 1,
      title: " Welcome to our cruise website!",
      img: img1,
      dis: " At our company, we are passionate about providing unforgettable cruise experiences for our guests. We believe that a great vacation starts with exceptional service and attention to detail. Our goal is to create an environment where you can relax, have fun, and make memories that will last a lifetime.",
    },
    {
      id: 2,
      title: "we believe that responsible tourism is important.",
      img: img2,
      dis: " Our team is made up of experienced professionals who are dedicated to making your cruise as enjoyable and stress-free as possible. From the moment you step on board, we are committed to providing you with top-notch service and amenities. We offer a variety of activities and entertainment options, from live shows and concerts to fitness classes and spa treatments.",
    },
    {
      id: 3,
      title: "welcoming you on board one of our cruises soon!",
      img: img3,
      dis: " Our fleet of ships is designed with your comfort and enjoyment in mind. Our cabins and suites are spacious and comfortable, with plenty of room for you to relax and unwind. We offer a variety of dining options, from casual buffets to formal restaurants, with cuisine that caters to every taste and dietary requirement.",
    },
  ];
  const handleClick = (id) => {
    setState(data[id ? id : 0]);
  };

  return (
    <>
      <section className="about">
        <div className="wrap">
          <div className="top">
            <h2>About us</h2>
            <hr></hr>
            <hr className="hr2"></hr>
            <hr className="hr3"></hr>
          </div>
          <div className="wrap2">
            <div className="left">
              <h3>{state.title ? state.title : data[0].title}</h3>
              <p> {state.dis ? state.dis : data[0].dis}</p>
              <div className="smcards">
                <div
                  className="smcard active"
                  style={{ marginLeft: "0rem" }}
                  onClick={() => handleClick(0)}
                >
                  <img src={img1} alt="img" />
                </div>
                <div className="smcard" onClick={() => handleClick(1)}>
                  <img src={img2} alt="img" />
                </div>
                <div className="smcard" onClick={() => handleClick(2)}>
                  <img src={img3} alt="img" />
                </div>
              </div>
            </div>
            <div className="right">
              <img src={state.img ? state.img : data[0].img} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
