const express = require("express");
require("dotenv").config();
const authRouter = require("./routes/auth");
const connectDatabase = require("./database/index");
const cors = require("cors");

const app = express();

connectDatabase();
app.use(cors()); // this is for data fetching
app.use(express.json());
app.use("/auth/", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server connected at port ${process.env.PORT}`);
});
