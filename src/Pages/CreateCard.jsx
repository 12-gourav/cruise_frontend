import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const CreateCard = () => {
  const [name, setName] = useState("");
  const [dis, setDis] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [banner, setBanner] = useState("");
  const [more, setMore] = useState([]);
  const [t, setT] = useState("");
  const [names, setNames] = useState([]);

  const handleClick = () => {
    // 👇️ push to the end of the state array
    setNames((current) => [...current, t]);
    setT("");
  };

  const handleSubmit = () => {
    try {
      if (
        name == "" ||
        dis == "" ||
        date == "" ||
        start == "" ||
        end == "" ||
        banner == "" ||
        names == ""
      ) {
        return toast.error("All fields are required !!!!!");
      }
      axios
        .post("https://cruise-gg3e.onrender.com/cruise/create", {
          name,
          dis,
          date,
          start,
          end,
          banner,
          names,
        })
        .then((res) => {
          if (res.data) {
            toast.success("Data saved successfully");
            setName("");
            setDate("");
            setDis("");
            setStart("");
            setEnd("");
            setBanner("");
            setNames([]);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create">
      <div className="wrap">
        <h2>Create Post</h2>
        <div className="form">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Post Title"
          ></input>
        </div>
        <div className="form">
          <label>Description</label>
          <input
            value={dis}
            onChange={(e) => setDis(e.target.value)}
            type="text"
            placeholder="Enter Post Description"
          ></input>
        </div>
        <div className="form">
          <label>Date</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder="Enter Post Title"
          ></input>
        </div>
        <div className="form">
          <label>Start Location</label>
          <input
            value={start}
            onChange={(e) => setStart(e.target.value)}
            type="text"
            placeholder="Enter Post Start Location"
          ></input>
        </div>
        <div className="form">
          <label>End Location</label>
          <input
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            type="text"
            placeholder="Enter Post Title"
          ></input>
        </div>
        <div className="form">
          <label>Banner Images</label>
          <input
            value={banner}
            onChange={(e) => setBanner(e.target.value)}
            type="text"
            placeholder="Enter Post Title"
          ></input>
        </div>
        <div className="form">
          <label>More Images</label>
          <div className="f2">
            <input
              type="text"
              placeholder="Enter Post Title"
              value={t}
              onChange={(e) => {
                setT(e.target.value);
              }}
            ></input>
            <button onClick={handleClick}>Add</button>
          </div>
        </div>
        <div className="img">
          {names.map((d, index) => (
            <img src={d} key={index} className="avtar" />
          ))}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CreateCard;
