const userService = require('../services/user.services');

exports.userCreate = (req, res) => {

    req.assert('name', "name can not be blank").notEmpty();
    req.assert('email', "email can not be blank").notEmpty();
    req.assert('email', "Email is not valid").isEmail();
    req.sanitize("email").normalizeEmail({ remove_dots: false });


    // Check for validation errors
    var errors = req.validationErrors();
    if (errors) {
        return res.status(400).send(errors);
    } else {
        userService.userCreate(req, res);
    }

    exports.get = function (req, res) {
        return userService.get(req, res)
    }

    exports.sendEmails = (req, res) => {
        userService.sendEmails(req, res)
    }
}
