const express = require("express");
const server = express();
const body_parser = require("body-parser");
const cors = require("cors");
const api = require("../routes");

const corsOptions = {
    origin : '*',
    methods : "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
    preflightContinue : false,
    optionsSuccessStatus : 200 ,
    credentials : false,
    allowedHeaders : ['X-Requested-With, Content-Type,X-Amz-Date, Authorization, X-Api-Key, Origin, Accept, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin']
  }



// Configurar cabeceras y cors include before other routes

server.use(cors(corsOptions));
server.use(body_parser.urlencoded({ extended: false }));
server.use(body_parser.json());
server.use(express.static(__dirname + "/../public"));
server.use('/api', api);

module.exports = server;