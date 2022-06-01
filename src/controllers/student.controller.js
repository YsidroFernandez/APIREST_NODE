'use strict';

const fs = require('fs');
const path = require("path");
const DB_PATH = path.join(__dirname + '/../../data_json/students.json');

let db = require(DB_PATH);
const { StudentModel } = require("../models");


async function getAllStudents(req,resp){
    let students = [];

    return resp.status(200).send({error : false, data : db});

}

module.exports = {
    getAllStudents,
}