const express = require('express');
const routes = require('./Develop/routes');
// This imports sequelize from instance created inside develop/config
const sequelize = require('./Develop/config/connection');

// creating handler for requests and routes utilizing express
const app = express();
const PORT = process.env.PORT || 3001;