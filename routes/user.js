const express = require("express");
const router = express.Router();

const {
  handleList,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// Define routes

router.route("/").get(handleList).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.get("/profile", (req, res) => {
  res.send("User profile page");
});

module.exports = router;
