const User = require("../models/userModel");
//We require userModel and store it in a User object, then User has access to mongoDB functions
//User has access to all mongo database functions such as findOne, create ...etc check mongo db documenation for all available functions

const createUser = async (req, res) => {
  //request email from body
  const { email } = req.body;
  //check if email exist in database using findOne function
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //if not, create new user using create function
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    //user already exist
    res.json({
      message: "User Already Exist",
      success: false,
    });
  }
};

module.exports = { createUser };
