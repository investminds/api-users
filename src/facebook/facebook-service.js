import axios from "axios";
import User from "../user/user-model.js";
import jwt from "jsonwebtoken";

const getFacebookPages = async (accessToken) => {
  const response = await axios.get(
    `https://graph.facebook.com/me/accounts?access_token=${accessToken}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Facebook pages");
  }

  const data = await response.json();
  console.log(data);
  return data.data.map((page) => ({
    pageId: page.id,
    pageName: page.name,
  }));
};

const login = async (facebookData) => {
  const { facebookId, email, name, facebookToken, pages, picture } =
    facebookData;

  let user = await User.findOne({ facebookId });

  if (!user) {
    user = new User({
      facebookId,
      email,
      name,
      facebookToken,
      facebookPages: pages,
      picture,
    });

    await user.save();
  } else {
    if (!user.picture?.length && picture) user.picture = picture;
    user.facebookToken = facebookToken;
    user.facebookPages = pages;
    await user.save();
  }

  const token = jwt.sign(
    { email, name, id: user._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return {
    token,
    user: {
      email: user.email,
      name: user.name,
      pages: user.facebookPages,
      picture: user.picture,
    },
  };
};

export default { getFacebookPages, login };
