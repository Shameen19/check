var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.get("/", function (req, res) {
  res.send(" node server is up and running");
});
const port = process.env.PORT || "8080";

app.listen(port, function () {
  console.log("app is up and runnning");
});
