import jwt from "jsonwebtoken";
import user from "../DataBase/Model/user.js";
import employee from "../DataBase/Model/employee.js";
import bcrypt from "bcrypt";

export const loginController = async (req, res) => {
  try {
    const db = req.body.role === "user" ? user : employee;
    const fetchedUser = await db.findOne({ email: req.body.email });
    if (!fetchedUser) {
      return res.status(404).json({
        success: false,
        message: "Email does not match",
      });
    }
    const isMatch = await bcrypt.compare(
      req.body.password,
      fetchedUser.password
    );
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password does not match",
      });
    }

    const token = jwt.sign(
      { userId: fetchedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      fetchedUser,
    });
  } catch (error) {
    console.log("Error in login controller", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
