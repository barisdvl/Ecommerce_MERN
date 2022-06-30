const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB connection succesfull!");
    })
    .catch((err) => {
      console.log("DB connection fail!");
      console.log(err);
    });
};
