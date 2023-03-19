const express = require("express"); //to import a npm package/module or node built in modules just require the module name
const dbConnect = require("./config/dbConnect"); //to import a custom module/plugin require will need the module path
//module.exports export the file as a plugin
const app = express(); //initiating object + inovking the function
const dotenv = require("dotenv").config(); //inovking the function
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");

dbConnect();

//we dont need the below it was just for testing the server on the browser
// app.use("/", (req, res) => {
//   res.send("hello from seerve side");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1/user", authRouter);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
