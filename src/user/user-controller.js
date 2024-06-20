import userService from "./user-service.js";

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userService.register(username, password);

    res.status(200).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await userService.login({ email, name, password });
    username, password;

    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    res.status(401).json({ error: "Invalid username or password" });
  }
};

const facebookLogin = async (req, res) => {}

export default { register, login };
