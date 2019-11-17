const sequelize = require("../index.js");
const Sequelize = require("sequelize");

const Photos = sequelize.define(
  "photos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    // attributes
    styleId: {
      type: Sequelize.INTEGER
    },
    url: {
      type: Sequelize.TEXT
    },
    thumbnail_url: {
      type: Sequelize.TEXT
    }
  },
  {
    // options
  }
);
Photos.sync();

module.exports = Photos;
