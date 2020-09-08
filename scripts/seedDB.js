const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/todidit"
);

const userSeed = [
  {
    email: "sally@gmail.com",
    title: "Coding",
    content:
      "Finished coding project and deployed to Heroku",
    date: new Date(Date.now())
  },
  {
    email: "sam@gmail.com",
    title: "Laundry",
    content:
      "Washed and folded entire family's laundry",
    date: new Date(Date.now())
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });