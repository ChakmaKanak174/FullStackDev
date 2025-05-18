//@desc register new user
//@route POST /api/users
//@access Public

const regUser = (req, res) => {
  res.json({ message: "Register User" });
};

//@desc authenticate a user
//@route POST /api/users/login
//@access Public

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

//@desc Get user data
//@route GET /api/users/me
//@access Private

const getMe = (req, res) => {
  res.json({ message: "User Data display" });
};

module.exports = {
  regUser,
  getMe,
  loginUser,
};
