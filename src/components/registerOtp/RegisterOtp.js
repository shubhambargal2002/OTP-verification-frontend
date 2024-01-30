import React, { useState } from "react";
import "./registerOtp.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// const host = "https://otp-verification-shubham-bargal.onrender.com";
const host = "http://localhost:5000";

const RegisterOtp = (e) => {
  const [otp, setOtp] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        otp,
        email: location.state,
      };
      const res = await axios.post(`${host}/registerOtpVerify`, data);

      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.authtoken);
        navigate("/dashboard");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Enter OTP Here</h1>
        <input
          type="text"
          placeholder="OTP"
          name="otp"
          onChange={(e) => setOtp(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="submitButton">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterOtp;
