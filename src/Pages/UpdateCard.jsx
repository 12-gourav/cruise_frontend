import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams, useRoutes } from "react-router-dom";

const CreateCard = () => {
  const [namew, setNamew] = useState();
  const [dis, setDis] = useState();
  const [datew, setDatew] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [banner, setBanner] = useState();
  const [more, setMore] = useState([]);
  const [t, setT] = useState("");
  const [names, setNames] = useState([]);
  const [state, setState] = useState([]);

  const handleClick = () => {
    // 👇️ push to the end of the state array
    setNames((current) => [...current, t]);
    setT("");
  };
  const { _id } = useParams();
  const id = _id;
  console.log(id, "id");

  const getData = async () => {
    try {
      const res = await axios.post(
        "https://cruise-gg3e.onrender.com/cruise/get2",
        {
          _id,
        }
      );
      setState(res.data);
      console.log(res.data);

      setNamew(res.data.name);
      setDis(res.data.description);
      setDatew(res.data.date);
      setStart(res.data.startLocation);
      setEnd(res.data.endLocation);
      setBanner(res.data.BannerLink);
      setNames(res.data.SomeMoreImages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    try {
      if (
        namew == "" ||
        dis == "" ||
        datew == "" ||
        start == "" ||
        end == "" ||
        banner == "" ||
        names == ""
      ) {
        return toast.error("All fields are required !!!!!");
      }
      axios
        .put("https://cruise-gg3e.onrender.com/cruise/update", {
          namew,
          dis,
          datew,
          start,
          end,
          banner,
          names,
          id,
        })
        .then((res) => {
          if (res.data) {
            toast.success("Data saved successfully");
            setNamew("");
            setDatew("");
            setDis("");
            setStart("");
            setEnd("");
            setBanner("");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create">
      <div className="wrap">
        <h2>Update Post</h2>
        <div className="form">
          <label>Name</label>
          <input
            value={namew}
            onChange={(e) => setNamew(e.target.value)}
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
            value={datew}
            onChange={(e) => setDatew(e.target.value)}
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
          {names?.map((d, index) => (
            <img src={d} key={index} className="avtar" />
          ))}
        </div>
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
};

export default CreateCard;
