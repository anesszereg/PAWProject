// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
// const DbConnect = require('./config/DBConnect');

// mongodb connection
mongoose.connect('mongodb://localhost:27017/IsilDB', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

//how toknow if the db is connected
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.info('Connected to MongoDB'));


app.use(bodyParser.json());
app.use(cors());

// MongoDB schema for Students
const studentSchema = new mongoose.Schema({
  name: String,
  firstname: String,
  email: String,
  appeals: [
    {
      date: Date,
      status: String,
      description: String,
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);

// Express routes
app.post('/api/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/api/students/search', async (req, res) => {
  const { query } = req.query;
  try {
    const students = await Student.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { firstname: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
      ],
    });
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// how to k now if the db is connected


app.listen(port, () => {
  console.log('---------------------');
  console.log(
      'Dev server running at  >',
      `http://localhost:${port}`
  );


  // DbConnect();
});

