const connect = require('./../database/db_connection');

const getData = cb => {
  connect.query(`SELECT * FROM superheroes`, (err, res) => {
    if (err) {
      return cb(err);
    }
    const superheroes = res.rows;
    cb(null, superheroes);
  });
};

module.exports = getData;
