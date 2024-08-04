const User = require("../models/userModel");

const handleList = async (req, res) => {
  const allUsers = await User.find({});
  return res.json(allUsers);
};

const getUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json(user);
};

const createUser = async (req, res) => {
  const body = req.body;
  await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
    role: body.role,
    gender: body.gender,
    dob: body.dob,
    phone: body.phone,
  });
  return res.json({});
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const body = req.body;
  const updatedUser = await User.findByIdAndUpdate(userId, body, { new: true });
  return res.json({ updatedUser });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const userDeleted = await User.findByIdAndDelete(userId);
  if (userDeleted) return res.json({ message: "Record deleted", userDeleted });
  return res.json({ message: `No Record Found for this id ${userId}` });
};

module.exports = { handleList, getUser, createUser, updateUser, deleteUser };
