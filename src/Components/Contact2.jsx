import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Contact2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await axios.post(
        "https://cruise-gg3e.onrender.com/user/create",
        {
          name,
          email,
          msg,
        }
      );
      if (data.data) {
        toast.success(
          "Your Data Saved Successfully we will contact very shortly !!!!!"
        );
        setName("");
        setEmail("");
        setMsg("");
      }
    } catch (error) {
      toast.error("something went wrorng");
    }
  };

  return (
    <div className="contact" style={{}}>
      <h2 style={{ margin: 0 }}>Contact us</h2>
      <div className="wrap" style={{ margin: 0, background: "transparent" }}>
        <div
          className="left"
          style={{
            width: "100%",
            margin: "0",
            padding: "0",
            background: "transparent",
          }}
        >
          <div className="form">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form">
            <label>Message</label>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              placeholder="Enter Your Message"
            />
          </div>
          <button className="fbtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
