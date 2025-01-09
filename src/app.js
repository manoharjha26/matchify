const epxress = require("express");
const app = epxress();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");

app.use(epxress.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");

connectDB()
  .then(() => {
    app.listen(7777, () => {
      console.log("Server is successfully on port 7777....");
    });

    console.log("Databse connection established ...");
  })
  .catch((err) => {
    console.log("Databse can't be connected ...");
  });
