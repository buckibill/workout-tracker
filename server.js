const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://buckibill:1Gracie00@ds047387.mlab.com:47387/heroku_d8s6nwpk", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("../routes/api.js"));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});