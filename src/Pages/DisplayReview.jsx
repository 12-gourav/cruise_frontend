import axios from "axios";
import React, { useEffect, useState } from "react";
import "./admin.css";
import { Space, Table, Tag, Avatar } from "antd";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const DisplayReview = () => {
  const [state, setState] = useState([]);

  const fetchrecord = async () => {
    try {
      const res = await axios.get(
        "https://cruise-gg3e.onrender.com/review/get"
      );
      setState(res.data);
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchrecord();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const res = await axios.post(
        "https://cruise-gg3e.onrender.com/review/delete",
        {
          id,
        }
      );
      if (res.data) {
        toast.success("Data delete successfully");
        fetchrecord();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Avtar",
      dataIndex: "imageLink",
      key: "imageLink",
      render: (im) => <Avatar src={im} />,
    },
    {
      title: "review",
      dataIndex: "review",
      key: "review",
    },
    {
      title: "Ratings",
      dataIndex: "star",
      key: "star",
    },
    {
      title: "Post Id",
      dataIndex: "cruiseSlug",
      key: "cruiseSlug",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (t) => t.toString(),
    },
    {
      title: "Delete",
      dataIndex: "_id",
      key: "_id",
      render: (t) => (
        <button
          style={{
            color: "white",
            background: "red",
            border: "none",
            outline: "none",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => handleDelete(t)}
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <div className="" style={{ padding: "1rem 2rem" }}>
      <h3 style={{ color: "#032887", padding: "2rem 0", textAlign: "center" }}>
        Display Review Records
      </h3>
      <Table columns={columns} dataSource={state} />
    </div>
  );
};

export default DisplayReview;
