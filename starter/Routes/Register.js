import express from "express";
import { employeeRegisterController } from "../Controllers/employeeRegister.js";
import { userRegisterController } from "../Controllers/userRegister.js";
import { loginController } from "../Controllers/login.js";
import { verifyToken } from "../Middleware/authMiddleware.js";
import { getUser } from "../Controllers/getUser.js";
import { getEmployee } from "../Controllers/getEmployee.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/employeeregister", employeeRegisterController);
router.post("/userregister", userRegisterController);
router.post("/login", loginController);
router.get("/getuser", getUser);
router.get("/getemployee", getEmployee);

//sending verification code

var otpEntered ;

router.post("/sendVerificationCode", async (req, res) => {
  var otp = Math.floor(100000 + Math.random() * 900000);
 otpEntered = otp;
  const { fullName, email } = req.body;
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.Pass,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "verification code",
    text: `Hello ${fullName} , your otp to verify your email for serviceDo.com is : ${otp}`,
  });
  res.json("sent");
});

router.post("/verifyCode", async (req, res) => {
  const { code } = req.body;
  try {
    if (otpEntered == code) {
      res.status(200).json("Matched");
    } else {
      res.json("did not match");
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
