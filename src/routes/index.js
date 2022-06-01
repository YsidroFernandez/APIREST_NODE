const express = require("express");
const api = express.Router();
const { StudentsController } = require("../controllers");

/****************** ROUTES ********************* */
api.get('/students',StudentsController.getAllStudents);

module.exports = api;
 