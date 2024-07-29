import user from '../DataBase/Model/user.js'

export const getUser = async(req , res) =>{
    try {
        const fetchedUser = await user.findOne({_id: req.body.userId});
        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            fetchedUser
        })
    } catch (error) {
        console.log("error at getUser:" + error);
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
}