import React, { useState } from "react";
import './verifyOTP.css';
import axios from "axios";

const VerifyOTP = ({ handleSubmit }) => {
  const [otp, setOTP] = useState();
  const handleValidate = (e) => {
    e.preventDefault();
    console.log(otp);
    
      const verifyAndSave = async () => {
        const data = {
          code: otp,
        };
        await axios
          .post("http://localhost:7777/auth/verifyCode", data)
          .then((response) => {
            if (response.data === "Matched") {
              handleSubmit();
            } else if (response.data === "did not match") {
              alert("wrong code entered");
            }
          });
      };
    verifyAndSave();
  };
  return (
    <>
      <div className="votpcontainer">
        <div className="votpmaintext">Enter the OTP sent to your gmail:</div>
        <div className="votpinputtext">
          <input
            type="text"
            className="otpinput"
            name="otpinput"
            value={otp}
            onChange={(e) => {
              console.log(e.target.value);
              setOTP(e.target.value);
            }}
          />
        </div>
        <div className="votpbtn">
          <button className="subotp" onClick={handleValidate}>
            Validate
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
