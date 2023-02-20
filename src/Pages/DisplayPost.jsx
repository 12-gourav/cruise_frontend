import axios from "axios";
import React, { useEffect, useState } from "react";
import "./admin.css";
import { Space, Table, Tag, Avatar } from "antd";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const DisplayPost = () => {
  const [state, setState] = useState([]);

  const fetchrecord = async () => {
    try {
      const res = await axios.get(
        "https://cruise-gg3e.onrender.com/cruise/get"
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
        "https://cruise-gg3e.onrender.com/cruise/delete",
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
      title: "BannerLink",
      dataIndex: "BannerLink",
      key: "BannerLink",
      render: (im) => <Avatar src={im} />,
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "startLocation",
      dataIndex: "startLocation",
      key: "startLocation",
    },
    {
      title: "endLocation",
      dataIndex: "endLocation",
      key: "endLocation",
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
    {
      title: "Edit",
      dataIndex: "_id",
      key: "_id",
      render: (t) => (
        <Link to={`/update/${t}`}>
          <button
            style={{
              color: "white",
              background: "green",
              border: "none",
              outline: "none",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          >
            Edit
          </button>
        </Link>
      ),
    },
  ];
  return (
    <div className="" style={{ padding: "1rem 2rem" }}>
      <h3 style={{ color: "#032887", padding: "2rem 0", textAlign: "center" }}>
        Display Post Records
      </h3>
      <Table columns={columns} dataSource={state} />
    </div>
  );
};

export default DisplayPost;
