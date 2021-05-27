const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const placesRouter = require("./routes/places-route");
const userRoutes = require("./routes/users-route");
const adminRoutes = require("./routes/admin-route");
const conferenceRoutes = require("./routes/conference-route");

const app = express();
app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/places", placesRouter);
app.use("/api/users", userRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/conferences", conferenceRoutes);

mongoose
  .connect(
    "mongodb+srv://AF:AF@cms.yrylr.mongodb.net/CMS?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
