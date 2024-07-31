import userpost from "../DataBase/Model/userpost.js";

export const myPostController = async (req, res) => {
  try {
    const myPosts = await userpost.find({ user: req.body.userId });
    return res.status(200).json({
      success: true,
      message: "User posts fetched successfully",
      myPosts,
    });
  } catch (error) {
    console.log("Error at get my posts: " + error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
