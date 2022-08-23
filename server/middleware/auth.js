const checkValidData = (req, res, next) => {
  if (!req.body.fullName) {
    res.status(400).json({ message: "Full Name is Required" });
  }
  if (!req.body.userName) {
    res.status(400).json({ message: "User Name is Required" });
  }
  if (!req.body.userEmail) {
    res.status(400).json({ message: "User Email is Required" });
  }
  if (!req.body.password) {
    res.status(400).json({ message: "Password is Required" });
  }
  next();
};

const checkSignInData = (req, res, next) => {
  if (!req.body.userEmail) {
    res.status(400).json({ message: "User Email is Required" });
  }
  if (!req.body.password) {
    res.status(400).json({ message: "Password is Required" });
  }
  next();
};

module.exports = { checkValidData, checkSignInData };
