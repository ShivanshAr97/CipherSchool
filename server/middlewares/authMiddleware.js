const secretKey = "mysecretkey";
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
      // console.log(req.headers);
  
      const authHeader = req.headers.authorization;
      console.log("authHeader:", authHeader);
  
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.log("Invalid authHeader");
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const token = authHeader.split(" ")[1];
      console.log("token:", token);
  
      if (!token) {
        console.log("No token");
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const decoded = jwt.verify(token, secretKey);
  
      req.userId = decoded.userId;
  
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
  

module.exports = authMiddleware;
