import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
  const logout = () => {
    if (window.confirm("Are you sure you want be logout")) {
      localStorage.removeItem("token");
      toast.success("Logout SuccessFully");
      Navigate("/");
    }
  };

  useEffect(() => {
    if (!token) {
      Navigate("/");
      toast.success("Already Login");
      return;
    }
    logout();
  }, [token]);
  return <div>Logout</div>;
};

export default Logout;
