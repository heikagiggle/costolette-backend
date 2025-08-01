import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied (No Token Provided)" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = jwt.verify(token, process.env.JWTSECRET);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

export default verifyToken;
