import facebookService from "./facebook-service.js";

const login = async (req, res) => {
  try {
    const result = await facebookService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { login };
