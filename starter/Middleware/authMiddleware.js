import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = await req.headers["authorization"].split(" ")[1];
    //This retrieves the Authorization header from the request.
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "error in decoding userId.",
        });
      } else {
        req.body.userId = decoded.userId;
        next();
      }
    });
  } catch (error) {
    console.log("error at middleware :" + error);
    return res.status(500).json({
      success: false,
      message: "authorization failed",
    });
  }
};
