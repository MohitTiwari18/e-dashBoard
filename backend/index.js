//node js connect with mongodb
const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();
app.use(express.json()); //post man payload value
app.use(cors()); //middleware for cors issue
//post api for the register route
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});
//login api with password removed from frontend
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});
app.listen(5000);
