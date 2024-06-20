import jwt from "jsonwebtoken";
import encrypt from "../config/encrypt.js";

export const validateJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).send({ message: "Token not provided." });
    }

    const decoded = jwt.verify(token, encrypt.secret);

    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime)
      return res.status(401).send({ message: "Token expired." });

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ mensagem: "Invalid token." });
  }
};
