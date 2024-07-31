import userpost from "../DataBase/Model/userpost.js";

export const postController = async(req , res) => {
    try {
        const post = new userpost(req.body)
        await post.save();
        res.status(200).json({
            success: true,
            message: "Job posted successfully",
            post
        });
    } catch (error) {
        console.log("Error at post controller: " + error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
    }
}