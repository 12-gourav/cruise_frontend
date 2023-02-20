import React from "react";
import CardList from "./CardList";
const Youtube = () => {
  return (
    <>
      <section className="youtube">
        <div className="wrap">
          <div className="left">
            <h2>
              Get Our Monthly<br></br>Newsletter
            </h2>
            <p>
              {" "}
              Travel content strives to produce consistent communication
              materials helpful while crawling through the web.
            </p>
            <div className="ib">
              <input placeholder="Enter your email" />
              <button className="ibtn">Subscribe</button>
            </div>
          </div>
          <div className="right">
            <div className="video">
              <div className="loader">
                <i className="bx bx-play"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Youtube;
