const User = require("../models/user.model");
const nodemailer = require('nodemailer');
exports.userCreate = async function (req, res) {

    var day = req.body.calender.day
    var month = req.body.calender.month
    var year = req.body.calender.year

    var calendar = `${day}/${month}/${year}`
    //console.log("........", calendar);
    var user = await User.findOne({
        aadhar: req.body.aadhar,
    });

    try {
        if (!user) {
            let user = new User({
                name: req.body.name,
                email: (req.body.email).toUpperCase(),
                mobileNumber: req.body.mobileNumber,
                bloodGroup: (req.body.bloodGroup).toUpperCase(),
                aadhar: req.body.aadhar,
                city: (req.body.city).toUpperCase(),
                calendar: calendar
            });
            console.log(calendar);
            let userResponse = await User.create(user);

            res.send({
                message: userResponse.name + " registered",
            });
        } else {
            console.log(calendar);
            res.send({
                message: "user already exsist",
            });
        }
    } catch (error) {
        throw error.message;
    }

    exports.get = async function (req, res) {
        var allUsers = await User.find();
        res.send(allUsers)
    }
}