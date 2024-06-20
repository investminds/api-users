import User from "./user-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import encrypt from "../config/encrypt.js";

const register = async (userData) => {
  const { email, password, name } = userData;

  let user = await User.findOne({ email });

  if (user) {
    throw new Error("User already exists!");
  }

  user = new User({
    email,
    password,
    name,
  });

  await user.save();

  const token = jwt.sign({ id: user._id, email, name }, encrypt.secret, {
    expiresIn: "1h",
  });

  return {
    token,
    user: {
      email,
      name,
    },
  };
};

const login = async (credentials) => {
  const { email, password } = credentials;

  const user = await User.findOne({ email });

  if (!user) throw new CustomError("Invalid email or password!", 400);

  const creadentialsMatch = bcrypt.compare(password, user.password);
  if (!creadentialsMatch)
    throw new CustomError("Invalid email or password!", 400);

  const token = jwt.sign({ email, name: user.name }, encrypt.secret, {
    expiresIn: 600,
  });

  return token;
};

export default { register, login };
