const express = require("express");
const requestRouter = express.Router();

const { userAuth } = require("../middlewares/auth");

requestRouter.post("/sendConnectionRequest", userAuth, (req, res) => {
  const user = req.user;
  console.log("send a Connection Request");

  res.send(user.firstName + " has send the friend request!");
});

module.exports = requestRouter;
