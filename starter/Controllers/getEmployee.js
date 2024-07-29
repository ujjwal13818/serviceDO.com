import employee from "../DataBase/Model/employee.js";

export const getEmployee = async (req, res) => {
  try {
    const fetchedUser = await employee.findOne({ _id: req.body.userId });
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      fetchedUser,
    });
  } catch (error) {
    console.log("error at getUser:" + error);
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
};
