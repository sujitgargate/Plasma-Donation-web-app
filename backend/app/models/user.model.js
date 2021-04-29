
const mongoose = require('mongoose');
const UserSchema = mongoose.Schema
    ({

        name: {
            type: String
        },
        email: {
            type: String
        },
        bloodGroup: {
            type: String
        },
        mobileNumber: {
            type: String
        },
        aadhar: {
            type: String
        },
        city: {
            type: String
        },
        calendar: {
            type: String
        }
    },
        {
            timestamps: true
        },
        { collection: 'User' }
    )
module.exports = mongoose.model('User', UserSchema);

//here we are creating collection where 1st parameter is collection name
// var dataSchema = new Schema({..}, { collection: 'data' })

/*

For dynamic collection name we please refer

//reference https://stackoverflow.com/a/55591502

*/