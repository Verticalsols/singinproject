const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  /* const user = new UserModel({
    fullName: req.body.fullName,
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    password: req.body.password,
  }); 
  
  const newUserData = await user.save();
  */
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = await UserModel.create({
      fullName: req.body.fullName,
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      password: hashedPassword,
    });

    // res.status(201).json({ message: "Welcme to Sign Up" });
    res
      .status(200)
      .json({ success: true, message: "successfully Sign Up", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signin = async (req, res) => {
  const user = await UserModel.findOne({
    userEmail: req.body.userEmail,
  });

  if (!user) {
    res.status(200).json({ message: "User didnot exist" });
  }

  const isValidPassword = bcrypt.compareSync(req.body.password, user.password);

  if (!isValidPassword) {
    res.status(400).json({ message: "Password donot Match" });
  }

  const token = jwt.sign(
    { fullName: user.fullName, userEmail: user.userEmail },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res
    .status(200)
    .json({ success: true, message: "Successfully Sign In", token });
};

module.exports = { signup, signin };
