const User = require("../models/user");

const newUser = (req, res, next) => {
  const user = new User({
    phoneNumber: req.body.phonenumber,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    gender: req.body.gender,
  });
  user
    .save()
    .then(function () {
      res.status(200)
      res.json({ status: "ok", data: "Account created successfully" });
    //   res.redirect(302, '/login');
    })
    .catch(function (error) {
      if (error.code == 11000) {
        console.log("This phone number already exist in db");
        res.status(500);
        res.send({
          status: "error",
          error: "One or more details already exist",
        });
        // res.redirect(302, '/login');
      }
    });
};

module.exports = { newUser };
