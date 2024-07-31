import userpost from "../DataBase/Model/userpost.js"


export const getJobsController = async(req , res) => {
    try {
           const allJobs = await userpost.find();
           return res.status(200).json({
             success: true,
             message: "All Jobs fetched successfully",
             allJobs,
           });
    } catch (error) {
        console.log("Error at fetching all jobs: " + error);
        return res.status(500).json({
            success: false,
            message: "Error while fetching all jobs",
            error,
        });
    }
 
}