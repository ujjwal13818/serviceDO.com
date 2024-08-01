import userpost from "../DataBase/Model/userpost.js";

export const updatePostController = async (req, res) => {
  try {
    const thePost = await userpost.findOne({ _id: req.body.id });
    if (!thePost) {
      return res.json({
        message: "Post not found",
      });
    }

    let updateData = {
      status: req.body.status,
    };

    if (req.body.status === "requested") {
      updateData = {
        ...updateData,
        $addToSet: { requestedBy: req.body.fullName }, // $addToSet ensures no duplicates
      };
    }

    await thePost.updateOne(updateData);

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};
