var express = require('express');
var app = express();
var expressExpressValidator = require('express-validator');
var router = express.Router();
var userController = require('../controller/user.controller');
var User = require('../models/user.model')
var userService = require('../services/user.services')
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
router.use(expressExpressValidator());

router.post('/create-doner', userController.userCreate);


router.get('/list-of-doners',
    async (req, res) => {
        var allUsers = await User.find();
        res.send(allUsers)
    });

router.post('/notify', async function (req, res) {

    var users = await User.find()
    try {
        for (let i = 0; i < users.length; i++) {
            console.log(users[i].email, "email");
            var transporter = nodemailer.createTransport(
                ({
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    auth: {
                        user: `${process.env.EMAILUSRRNAME}`,
                        pass: `${process.env.EMAILPASS}`
                    }
                }));
            var mailOptions = {
                from: `sujit ${req.body.email}`,
                to: `${users[i].email}`,
                subject: 'About Plasma donation',
                html: `<p>  Please contact the person on his email and mobile number</p>`
            };
            transporter.sendMail(mailOptions)
        }
        res.send({
            message: 'hi'
        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;