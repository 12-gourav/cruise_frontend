import React, { useEffect, useState } from "react";
import img from "../assets/r2.jpg";
import img1 from "../assets/a11.jpg";
import img2 from "../assets/a12.jpg";
import img3 from "../assets/a13.jpg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const CardList = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleSubmit = (data) => {
    dispatch({ type: "card", payload: data });
    Navigate("/detail");
  };

  const fetchCard = async () => {
    try {
      const res = await axios.get(
        "https://cruise-gg3e.onrender.com/cruise/get2"
      );
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <section className="cards">
      <div className="wrap">
        <div className="top">
          <h2>Available Listings</h2>
          <hr></hr>
          <p>
            Travel content strives to produce consistent communication materials
            (blog posts, images, videos, etc ) that customers will find helpful
            while crawling through the web.
          </p>
        </div>
        <div className="collect">
          {data?.map((data, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleSubmit(data)}
            >
              <div className="img">
                <img src={data?.SomeMoreImages[0]} alt="img" />
              </div>
              <h4>
                {data?.name.substring(20, [0])}...
                <span>
                  4.5 <i class="bx bxs-star"></i>
                </span>
              </h4>
              <p>{data?.description.substring(60, [0])} ...</p>
              <div className="avr">
                <i class="bx bx-comment-dots"></i>
                <p className="sp">
                  +250 Reviews <i class="bx bxl-whatsapp"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
        <center>
          <Link
            to="/view"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <button className="vm" style={{ cursor: "pointer" }}>
              ViewMore <i class="bx bx-chevrons-right"></i>
            </button>
          </Link>
        </center>
      </div>
    </section>
  );
};

export default CardList;
