const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const app = express();
app.use(bodyParser());
const mongoose = require("mongoose");
const Profile = require("./Profile.model.js");
app.use(cors())

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};
conn();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add", (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    dob,
    languages,
    achievements,
    educations,
    projects,
    experiences,
    skills,
    jobRole
  } = req.body;
  const profile = new Profile({
    name,
    email,
    phone,
    address,
    dob,
    languages,
    achievements,
    educations,
    projects,
    experiences,
    skills,
    jobRole
  });
  profile
    .save()
    .then(() => {
      res.status(200).json({ ok: true, data: profile });
    })
    .catch((err) => {
      res.status(400).json({ ok: false, data: err.message });
    });
});

app.get("/all", (req, res) => {
  Profile.find()
    .then((profiles) => {
      res.status(200).json({ ok: true, data: profiles });
    })
    .catch((err) => {
      res.status(400).json({ ok: false, data: err.message });
    });
})

app.get("/update", async(req, res) => {
    const {_id,action} = req.query;
    console.log(_id,action)
    try{
      const objectId = new mongoose.Types.ObjectId(_id);
      await Profile.updateOne({_id:objectId},{$set:{status:action}});
      res.status(200).json({data:"Updated Successfully",ok:true})
    }
    catch(err){
      res.status(400).json({data:err.message,ok:false})
    }
})

app.listen(process.env.PORT || 5500, () => {
  console.log(`Server is running on port ${process.env.PORT || 5500}`);
});
