const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const url = process.env.DATABASEURL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to DB');
})
    .catch((error) => {
        console.log('Error occured' + error);
        process.exit();
    })