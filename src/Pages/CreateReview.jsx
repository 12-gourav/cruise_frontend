import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const CreateReview = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");
  const [star, setStar] = useState("");
  const [cid, setCid] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [data, setData] = useState([]);

  const getOptions = async () => {
    try {
      const res = await axios.get(
        "https://cruise-gg3e.onrender.com/cruise/get"
      );
      if (res) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  const handleSubmit = () => {
    try {
      console.log(cid);
      if (
        name == "" ||
        review == "" ||
        date == "" ||
        star == "" ||
        cid == "" ||
        imgLink == ""
      ) {
        return toast.error("All fields are required !!!!!");
      }
      axios
        .post("https://cruise-gg3e.onrender.com/review/create", {
          name,
          review,
          date,
          star,
          cid,
          imgLink,
        })
        .then((res) => {
          if (res.data) {
            toast.success("Data saved successfully");
            setName("");
            setDate("");
            setReview("");
            setStar("");
            setCid("");
            setImgLink("");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create">
      <div className="wrap">
        <h2>Create Testinomials</h2>
        <div className="form">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="form">
          <label>Review</label>
          <input
            value={review}
            onChange={(e) => setReview(e.target.value)}
            type="text"
            placeholder="Enter Review"
          ></input>
        </div>
        <div className="form">
          <label>Date</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder="Enter Review date"
          ></input>
        </div>
        <div className="form">
          <label>Star Ratings</label>
          <input
            value={star}
            onChange={(e) => setStar(e.target.value)}
            type="text"
            placeholder="Enter No 1 to 5 not use decimal value"
          ></input>
        </div>
        <div className="form">
          <label>Select Cruise Post</label>
          <select value={cid} onChange={(e) => setCid(e.target.value)}>
            {data?.map((d, index) => (
              <option value={d._id} key={index}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form">
          <label>User Image</label>
          <input
            value={imgLink}
            onChange={(e) => setImgLink(e.target.value)}
            type="text"
            placeholder="Enter User Image link"
          ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CreateReview;
