//Adding all the required modules
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');

//Models Import
const Profile = require('./Profile.model.js');

//dotenv config
require('dotenv').config({ path: path.join(__dirname, '../.env') });

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('resumes'));

//DB connection function
const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
};
conn();

//Multer Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, './resumes/'));
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    //Name of the file will be email+phone+extension
    cb(null, `${req.body.email}${req.body.phone}${extension}`);
  },
});

const upload = multer({ storage: storage });

//Route Checker
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Route to create profile in mongoDB database
app.post('/add', upload.single('file'), (req, res) => {
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
    jobRole,
  } = req.body;

  //Creating new Profile object from the request body
  const profile = new Profile({
    name,
    email,
    phone,
    address,
    dob,
    languages: JSON.parse(languages),
    achievements: JSON.parse(achievements),
    educations: JSON.parse(educations),
    projects: JSON.parse(projects),
    experiences: JSON.parse(experiences),
    skills: JSON.parse(skills),
    jobRole,
  });

  //Handling save
  profile
    .save()
    .then(() => {
      res.status(200).json({ ok: true, data: profile });
    })
    .catch((err) => {
      res.status(400).json({ ok: false, data: err.message });
    });
});

//returns all the profiles
app.get('/all', (req, res) => {
  Profile.find()
    .then((profiles) => {
      res.status(200).json({ ok: true, data: profiles });
    })
    .catch((err) => {
      res.status(400).json({ ok: false, data: err.message });
    });
});

//Get request to update as the query is passed no body was required
app.get('/update', async (req, res) => {
  const { _id, action } = req.query;
  console.log(_id, action);
  try {
    const objectId = new mongoose.Types.ObjectId(_id);
    await Profile.updateOne({ _id: objectId }, { $set: { status: action } });
    res.status(200).json({ data: 'Updated Successfully', ok: true });
  } catch (err) {
    res.status(400).json({ data: err.message, ok: false });
  }
});

app.listen(process.env.PORT || 5500, () => {
  console.log(`Server is running on port ${process.env.PORT || 5500}`);
});
