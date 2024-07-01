const mongoose = require("mongoose");



const EducationSchema = new mongoose.Schema({
  college: { type: String, required: true, trim: true },
  degree: { type: String, required: true, trim: true },
  duration: { type: String, required: true, trim: true },
  pointer: { type: Number, required: true }
});

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  link: { type: String, trim: true }
});

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  duration: { type: String, required: true, trim: true },
  details: { type: String, trim: true }
});

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 10,
    maxlength: 10,
    match: [/^\d{10}$/, "Please enter a valid phone number"]
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  languages: {
    type: [String],
    required: true,
    validate: {
      validator: function(arr) {
        return arr.length > 0;
      },
      message: "Languages cannot be empty"
    }
  },
  achievements: {
    type: [String],
    required: true,
    validate: {
      validator: function(arr) {
        return arr.length > 0;
      },
      message: "Achievements cannot be empty"
    }
  },
  educations: {
    type: [EducationSchema],
    required: true
  },
  projects: {
    type: [ProjectSchema],
    required: true
  },
  experiences: {
    type: [ExperienceSchema],
    required: true
  },
  skills: {
    type: [String],
    required: true,
    validate: {
      validator: function(arr) {
        return arr.length > 0;
      },
      message: "Skills cannot be empty"
    }
  },
  jobRole: {
    type: String,
    required:true
  },
  status:{
    type:String,
    default:"Undecided"
  },
  experience: {
    type: Number,
    default: 0 // Default to 0 years of experience
  }
}, { timestamps: true });


// Pre-save middleware to calculate total experience
ProfileSchema.pre('save', function (next) {
  if (this.isModified('experiences')) {
    let total = 0;
    
    // Convert duration to months
    this.experiences.forEach(exp => {
      total += parseInt(exp.duration);
    });

    // Convert total months to years
    this.experience = total;
  }
  next();
});

module.exports = mongoose.model("Profile", ProfileSchema);
