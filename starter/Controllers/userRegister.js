import bcrypt from 'bcrypt';
import user from '../DataBase/Model/user.js';

export const userRegisterController = async(req , res) => {
    try {
        const user1 = await user.findOne({email: req.body.email});
        if(user1){
            return res.status(500).json({
                success: false,
                message: "user already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        const newUser = new user(req.body);
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "User registered successfully"
        })
        
    } catch (error) {
        console.log("Error at userRegisterController" + " " + error);
        return res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
} 