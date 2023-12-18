const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/hospital', {useNewUrlParser: true, useUnifiedTopology: true});

const patientSchema = new mongoose.Schema({
  patientId: Number,
  surname: String,
  othernames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyName: String,
  emergencyContact: String,
  relationshipWithPatient: String
});

const Patient = mongoose.model('Patient', patientSchema);

app.use(express.json());

app.post('/register', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.send(patient);
});

app.listen(3000, () => console.log('Server started'));t