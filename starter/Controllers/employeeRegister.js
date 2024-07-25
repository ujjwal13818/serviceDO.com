import bcrypt from 'bcrypt'
import employee from '../DataBase/Model/employee.js';

export const employeeRegisterController = async(req , res) => {
    try {
        const user = await employee.findOne({
          email: req.body.email,
        });
        if (user) {
          return res.status(500).json({
            success: false,
            message: "User already exists"
          })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password , salt);

        req.body.password = hashedPassword;
        const newEmployee = new employee(req.body);
        await newEmployee.save();

        return res.status(200).json({
            success: true,
            message: "Registered successfully"
        })
        
    } catch (error) {
        console.log("Error at Controller/EmployeeRegister during initialization");
        console.log(error);
    }
}