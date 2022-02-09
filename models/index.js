'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

let sequelize;

sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432
});

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.user = require("../models/user.js")(sequelize, Sequelize);
  
  module.exports = db;