const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const placesRouter = require("./routes/places-route");
const userRoutes = require("./routes/users-route");
const adminRoutes = require("./routes/admin-route");
const conferenceRoutes = require("./routes/conference-route");

//it19031026
const speakerapi = require('./routes/speaker.api');




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

//it19031026
app.use('/speaker', speakerapi());


mongoose
  .connect(
    "mongodb+srv://AF:AF@cms.yrylr.mongodb.net/CMS?retryWrites=true&w=majority",
    {useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
  }
  )
  .then(() => {
    app.listen(5000);
    console.log('server successfull');
  })
  .catch((err) => {
    console.log(err);
  });