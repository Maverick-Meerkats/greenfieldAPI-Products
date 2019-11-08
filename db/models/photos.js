const sequelize = require("../index.js");

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

module.exports = {
  getOne: id => {
    Photos.findByPk(id).then(result => {
      console.log(result);
    });
  }
};
